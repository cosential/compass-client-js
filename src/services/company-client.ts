import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { CompanyAddress } from '../compass-models/company/company-address';
import { Client } from './client';

/**
 * The client service for any Company-specific requests with special logic.
 */
export class CompanyClient extends Client {
  /**
   * @param companyId - Cosential company id
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object containing a CompanyAddress as a Promise
   */
  public async getCompanyAddress(
    companyId: number,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < CompanyAddress > > {
    let addressUrl: string = '/companies/' + companyId + '/addresses';
    let allAddresses: ResponseData < CompanyAddress[] > = await this.get < CompanyAddress[] > (addressUrl, opts);
    let message: string = '';
    let result: CompanyAddress;

    if (allAddresses.result != null && allAddresses.result.length > 0) {
      let address: { addressId: number, message: string } = this.findAddress(allAddresses.result);

      if (address.addressId) {
        let resultUrl: string = addressUrl + '/' + address.addressId;
        let response: ResponseData < CompanyAddress > = await this.get < CompanyAddress > (resultUrl, opts);
        
        if (!response.success) {
          return response;
        } else {
          result = response.result;
        }
      }

      message = address.message;
    } else {
      message = 'No associated addresses';
    }

    return {
      success: true,
      status: 200,
      error: null,
      message: message,
      result: result
    };
  }

  /**
   * @param allAddresses - Array of all addresses associated to a Company
   *
   * @returns - An address id and a message indicating success/failure details
   */
  private findAddress(allAddresses: CompanyAddress[]): { addressId: number, message: string } {
    let addressId: number = 0;
    let message: string = '';

    let primaryAddress: CompanyAddress = allAddresses.find(index => index.defaultInd && !index.deleterecord);
    if (!primaryAddress) {
      let secondaryAddress: CompanyAddress = allAddresses.find(index => (new Date(index.createdate).toString() == this.mostRecentDate(allAddresses)));
      if (!secondaryAddress) {
        message = 'Default address or a non-deleted recent address not found.';
      } else {
        addressId = secondaryAddress.AddressID;
        message = 'Default address not found. Returning ' + secondaryAddress.AddressTypeName + ' address which is the most recent non-deleted address.';
      }
    } else {
      addressId = primaryAddress.AddressID;
      message = 'Default ' + primaryAddress.AddressTypeName + ' address found and returned.';
    }
    return { addressId: addressId, message: message };
  }

  /**
   * @param allAddresses - Array of all addresses associated to a Company
   *
   * @returns - Most recent date for an address type as a string
   */
  private mostRecentDate(allAddresses: CompanyAddress[]): string {
    let dates: Date[] = [];
    allAddresses.forEach(address => {
      if (!address.deleterecord) {
        dates.push(new Date(address.createdate));
      }
    });
    return new Date(Math.max.apply(null, dates)).toString();
  }
}
