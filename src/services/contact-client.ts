import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { ContactAddress } from '../compass-models/contact-address';
import { ContactImageMetadata } from '../compass-models/images/contact-image-metadata';
import { Image } from './../compass-models/images/image';
import { Client } from './client';

/**
 * Represents the client service for Contacts.
 */
export class ContactClient extends Client {    
    
    /**
     * Returns Contact Image/s.
     * @param contactId - Cosential contact id
     * @param imageType - Required image type. [1 = All (default), 2 = ProfilePicture, 3 = CardFront, 4 = CardBack]
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getContactImages<T>(contactId: number, imageType: number = 1, opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {
        let metadataUrl: string = '/contacts/' + contactId + '/images';
        let res: ResponseData<ContactImageMetadata[]> = await this.get<ContactImageMetadata[]>(metadataUrl, opts);

        if(res.result != null && res.result.length > 0){
            //return specific image
            let imageTypes: number[] = [2, 3, 4];
            if(imageTypes.indexOf(imageType) > -1){

                let actualImageUrl: string = '/images/contact/' + contactId + '/';
                switch(imageType) {
                    case(2): actualImageUrl += 'profilepicture'; break;
                    case(3): actualImageUrl += 'cardfront'; break;
                    case(4): actualImageUrl += 'cardback'; break;
                } 
                return await this.get<T>(actualImageUrl, opts);

            } else {
                //return all images
                let images: any = {};
                
                for (let index = 0; index < res.result.length; index++) {
                    let actualImageUrl: string = res.result[index].ImageUrl;
                    let imgUrl: string = actualImageUrl.substring(actualImageUrl.indexOf('/images/contact/'));
                    let response: ResponseData<Image> = await this.get<Image>(imgUrl, opts);
                    
                    let imageType: string = res.result[index].ImageType;
                    let imageBase64: string = response.result.Data;

                    images[imageType] = imageBase64;
                } return { success: true, error: null, message: null, result: images };
            }
        } else { 
            return { success: true, error: null, message: 'No associated image metadata', result: null }; 
        }
    }
    
    /**
     * Returns Contact Address.
     * @param contactId - Cosential contact id
     * @param addressType - Required address type. [1 = Office, 2 = Home]
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getContactAddress<T>(contactId: number, addressType: number, opts: RequestOptions = { showErrors: true }): Promise<ResponseData<T>> {
        let addressUrl: string = '/contacts/' + contactId + '/addresses';
        let allAddresses: ResponseData<ContactAddress[]> = await this.get<ContactAddress[]>(addressUrl, opts);
        let message: string = '';
        let result: T = null;

        if (allAddresses.result != null && allAddresses.result.length > 0) {
            //return specific address
            let addressTypes: number[] = [1, 2];
            if (addressTypes.indexOf(addressType) > -1) {
                let address: [number, string] = (addressType == 1) ? this.findAddress(allAddresses.result, 'office', 'home') : this.findAddress(allAddresses.result, 'home', 'office');
                let resultUrl: string = addressUrl + '/' + address[0];
                let data: ResponseData<T> = await this.get<T>(resultUrl, opts);

                message = address[1];
                result = data.result;
            } else { message = 'Not a valid address type'; }
        } else { message = 'No associated addresses'; }

        return { success: true, error: null, message: message, result: result };
    }

    /**
     * Returns an address id of the resultant address.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param requestedAddress - Requested address type
     * @param otherAddress - Not requested address type
     * @returns An address id as a number
     */
    private findAddress<T>(allAddresses: ContactAddress[], requestedAddress: string, otherAddress: string): [number, string] {
        let addressId: number = 0;
        let message: string = '';

        let primaryAddress: ContactAddress = allAddresses.find(index => (index.AddressType.toLowerCase() == requestedAddress) && (index.DefaultInd == true));
        if (primaryAddress == undefined) {
            let secondaryAddress: ContactAddress = allAddresses.find(index => (new Date(index.CreateDate).toString() == this.mostRecentDate(allAddresses, requestedAddress)));
            if (secondaryAddress == undefined) {
                let tertiaryAddress: ContactAddress = allAddresses.find(index => (index.AddressType.toLowerCase() == otherAddress) && (index.DefaultInd == true));
                if (tertiaryAddress == undefined) {
                    let quaternaryAddress: ContactAddress = allAddresses.find(index => (new Date(index.CreateDate).toString() == this.mostRecentDate(allAddresses, otherAddress)));;
                    addressId = quaternaryAddress.AddressID;
                    message = `No ${requestedAddress} address found. No default ${otherAddress} address found. Returning the most recent ${otherAddress} address.`;
                } else {
                    addressId = tertiaryAddress.AddressID;
                    message = `No ${requestedAddress} address found. Returning the default ${otherAddress} address.`;
                }
            } else {
                addressId = secondaryAddress.AddressID;
                message = `Default ${requestedAddress} address not found. Returning the most recent ${requestedAddress} address.`;
            }
        } else {
            addressId = primaryAddress.AddressID;
            message = `Default ${requestedAddress} address found and returned.`;
        } return [addressId, message];
    }

    /**
     * Returns most recent date for an address type.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param addressType - Address type to be looked up for most recent date
     * @returns Most recent date for an address type as a string
     */
    private mostRecentDate<T>(allAddresses: ContactAddress[], addressType: string): string {
        let dates: Date[] = [];
        allAddresses.forEach(index => {
            if (index.AddressType.toLowerCase() == addressType) {
                dates.push(new Date(index.CreateDate));
            }
        }); return new Date(Math.max.apply(null, dates)).toString();
    }
}