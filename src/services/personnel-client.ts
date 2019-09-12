import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { PersonnelImageMetadata } from '../compass-models/images/personnel-image-metadata';
import { Image } from'../compass-models/images/image';
import { Client } from './client';

/**
 * The client service for Personnel-specific requests with special logic.
 */
export class PersonnelClient extends Client {

  /**
   * @param personnelId - Cosential personnel id
   * @param opts - Optional request headers
   *
   * @returns - A detailed response object as a Promise
   */
  public async getPersonnelImage(
    personnelId: number,
    opts: RequestOptions = { showErrors: true }
  ): Promise < ResponseData < Image > > {
    let metadataUrl: string = '/personnel/' + personnelId + '/images';
    let metadataResponse: ResponseData < PersonnelImageMetadata[] > = await this.get < PersonnelImageMetadata[] > (metadataUrl, opts);

    if (metadataResponse.result != null && metadataResponse.result.length > 0) {
        let response: ResponseData < PersonnelImageMetadata[] > = await this.search < PersonnelImageMetadata[] > (metadataUrl, 'PrimaryPhoto:true');

        if (response.result.length > 0) {
          let imageUrl: string = response.result[0].OriginalImageEndpoint;
          imageUrl = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
          return this.get < Image > (imageUrl, opts);
        }
    } else {
      return {
        success: metadataResponse.success,
        status: metadataResponse.status,
        error: metadataResponse.error,
        message: metadataResponse.message,
        result: null
      };
    }
  }
}
