import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { ContactAddress } from '../compass-models/contact/contact-address';
import { ContactImageMetadata } from '../compass-models/images/contact-image-metadata';
import { Image } from '../compass-models/images/image';
import { Client } from './client';

/**
 * The client service for Contact-specific requests with special logic.
 */
export class ContactClient extends Client {

  /**
   * @param contactId - Cosential contact id
   * @param imageType - Required image type. ['profilepicture', 'cardfront', 'cardback']
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object containing an Image as a Promise
   */
  public async getContactImages(
    contactId: number,
    imageType: string = 'profilepicture',
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < Image > > {
    let metadataUrl: string = '/contacts/' + contactId + '/images';
    let metadataResponse: ResponseData < ContactImageMetadata[] > = await this.get < ContactImageMetadata[] > (metadataUrl, opts);

    if (metadataResponse.result != null && metadataResponse.result.length > 0) {
      let imageUrl: string = '/images/contact/' + contactId + '/' + imageType
      return await this.get < Image > (imageUrl, opts);
    } else {
      return {
        success: true,
        status: metadataResponse.status,
        error: null,
        message: 'No associated image metadata',
        result: null
      };
    }
  }

  /**
   * @param contactId - The Contact's Id
   * @param imageType - Which image should be set. Either 'profilepicture', 'cardfront', or 'cardback'
   * @param contentType - 'image/gif', image/jpeg', 'image/png', or 'image/tiff'
   * @param imageData - The raw base 64 encoded image data
   * @param opts - Optional request headers
   * 
   * @returns - A detailed response object containing an Image as a Promise
   */
  public async updateContactImage(
    contactId: number,
    imageType: string,
    contentType: string,
    imageData: string,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < Image > > {
    let url: string = '/images/contact/' + contactId + '/' + imageType;
    let payload: Image = {
      ContentType: contentType,
      Data: imageData
    }

    return await this.put < Image > (url, payload, opts);
  }

  /**
   * @param contactId - Cosential contact id
   * @param addressType - Required address type. ['office', 'home']
   * @param opts - Optional request headers
   *
   * @returns A detailed response object containing a ContactAddress as a Promise
   */
  public async getContactAddress(
    contactId: number,
    addressType: string,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < ContactAddress > > {
    let addressUrl: string = '/contacts/' + contactId + '/addresses';
    let allAddresses: ResponseData < ContactAddress[] > = await this.get < ContactAddress[] > (addressUrl, opts);
    let message: string = '';
    let result: ContactAddress;

    if (allAddresses.result != null && allAddresses.result.length > 0) {
      let address: { addressId: number, message: string } = this.findAddress(allAddresses.result, addressType);

      if (address.addressId) {
        let resultUrl: string = addressUrl + '/' + address.addressId;
        let response: ResponseData < ContactAddress > = await this.get < ContactAddress > (resultUrl, opts);

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
   * @param allAddresses - Array of all addresses associated to a Contact
   * @param requestedAddress - Requested address type
   *
   * @returns - An address id and a message indicating success/failure details
   */
  private findAddress(allAddresses: ContactAddress[], requestedAddress: string): { addressId: number, message: string } {
    let addressId: number = 0;
    let message: string = '';
    let otherAddress: string = requestedAddress === 'office' ? 'home' : 'office';

    let primaryAddress: ContactAddress = allAddresses.find(index => (index.AddressType.toLowerCase() == requestedAddress) && (index.DefaultInd == true));
    if (!primaryAddress) {
      let secondaryAddress: ContactAddress = allAddresses.find(index => (new Date(index.CreateDate).toString() == this.mostRecentDate(allAddresses, requestedAddress)));
      if (!secondaryAddress) {
        let tertiaryAddress: ContactAddress = allAddresses.find(index => (index.AddressType.toLowerCase() == otherAddress) && (index.DefaultInd == true));
        if (!tertiaryAddress) {
          let quaternaryAddress: ContactAddress = allAddresses.find(index => (new Date(index.CreateDate).toString() == this.mostRecentDate(allAddresses, otherAddress)));;
          addressId = quaternaryAddress.AddressID;
          message = 'No ' + requestedAddress + ' address found. No default ' + otherAddress + ' address found. Returning the most recent ' + otherAddress + ' address.';
        } else {
          addressId = tertiaryAddress.AddressID;
          message = 'No ' + requestedAddress + ' address found. Returning the default ' + otherAddress + ' address.';
        }
      } else {
        addressId = secondaryAddress.AddressID;
        message = 'Default ' + requestedAddress + ' address not found. Returning the most recent ' + requestedAddress + ' address.';
      }
    } else {
      addressId = primaryAddress.AddressID;
      message = 'Default ' + requestedAddress + ' address found and returned.';
    }
    return { addressId: addressId, message: message };
  }

  /**
   * @param allAddresses - Array of all addresses associated to a Contact
   * @param addressType - Address type to be looked up for most recent date
   *
   * @returns - Most recent date for an address type as a string
   */
  private mostRecentDate < T > (allAddresses: ContactAddress[], addressType: string): string {
    let dates: Date[] = [];
    allAddresses.forEach(address => {
      if (address.AddressType.toLowerCase() == addressType) {
        dates.push(new Date(address.CreateDate));
      }
    });
    return new Date(Math.max.apply(null, dates)).toString();
  }
}
