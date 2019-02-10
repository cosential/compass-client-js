import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
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
                }
                
                return {
                    success: true,
                    error: null,
                    message: null,
                    result: images
                };
            }
        } else {
            return {
                success: true,
                error: null,
                message: 'No associated image metadata',
                result: null
            };
        }
    }
}