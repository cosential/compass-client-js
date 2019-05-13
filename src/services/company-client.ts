import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { CompanyAddress } from './../compass-models/company-address';
import { Client } from './client';

/**
 * Represents the client service for Companies.
 */
export class CompanyClient extends Client {

    /**
     * Returns Company Address.
     * @param companyId - Cosential company id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getCompanyAddress<T>(companyId: number, opts: RequestOptions = { showErrors: true }): Promise<ResponseData<T>> {
        let addressUrl: string = '/companies/' + companyId + '/addresses';
        let allAddresses: ResponseData<CompanyAddress[]> = await this.get<CompanyAddress[]>(addressUrl, opts);
        let message: string = '';
        let result: T = null;

        if (allAddresses.result != null && allAddresses.result.length > 0) {
            let address: [number, string] = this.findAddress(allAddresses.result);

            if (address[0] != 0) {
                let resultUrl: string = addressUrl + '/' + address[0];
                let data: ResponseData<T> = await this.get<T>(resultUrl, opts);
                result = data.result;
            } message = address[1];

        } else { message = 'No associated addresses'; }
        return { success: true, status: 200, error: null, message: message, result: result };
    }

    /**
     * Returns an address id of the resultant address.
     * @param allAddresses - Array of all addresses associated to a Contact
     * @param requestedAddress - Requested address type
     * @param otherAddress - Not requested address type
     * @returns An address id as a number
     */
    private findAddress<T>(allAddresses: CompanyAddress[]): [number, string] {
        let addressId: number = 0;
        let message: string = '';

        let primaryAddress: CompanyAddress = allAddresses.find(index => index.defaultInd && !index.deleterecord);
        if (primaryAddress == undefined) {
            let secondaryAddress: CompanyAddress = allAddresses.find(index => (new Date(index.createdate).toString() == this.mostRecentDate(allAddresses)));
            if (secondaryAddress == undefined) {
                message = `Default address or a non deleted recent address not found.`;
            } else {
                addressId = secondaryAddress.AddressID;
                message = `Default address not found. Returning ${secondaryAddress.AddressTypeName} address which is the most recent non deleted address.`;
            }
        } else {
            addressId = primaryAddress.AddressID;
            message = `Default ${primaryAddress.AddressTypeName} address found and returned.`;
        } return [addressId, message];
    }

    /**
     * Returns most recent date.
     * @param allAddresses - Array of all addresses associated to a Company
     * @returns Most recent date for an address type as a string
     */
    private mostRecentDate<T>(allAddresses: CompanyAddress[]): string {
        let dates: Date[] = [];
        allAddresses.forEach(index => {
            if (!index.deleterecord) {
                dates.push(new Date(index.createdate));
            }
        }); return new Date(Math.max.apply(null, dates)).toString();
    }


    //TODO: Implementation for Company Images
}