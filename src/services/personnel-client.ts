import 'isomorphic-fetch';
import { RequestOptions, ResponseData } from '..';
import { PersonnelImageMetadata } from '../compass-models/images/personnel-image-metadata';
import { Image } from './../compass-models/images/image';
import { Client } from './client';

/**
 * Represents the client service for Personnel.
 */
export class PersonnelClient extends Client {
    
    /**
     * Returns Personnel Image/s.
     * @param personnelId - Cosential personnel id
     * @param primaryPhoto - If true, returns primary photo. Else, all images (default).
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getPersonnelImages<T>(personnelId: number, primaryPhoto: boolean = false, opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {        
        let metadataUrl: string = '/personnel/' + personnelId + '/images';
        let metadata: ResponseData<PersonnelImageMetadata[]> = await this.get<PersonnelImageMetadata[]>(metadataUrl, opts);

        if(metadata.result != null && metadata.result.length > 0) {
            if(primaryPhoto){
                let searchQuery: string = 'PrimaryPhoto:true';
                let response: ResponseData<PersonnelImageMetadata[]> = await this.search<PersonnelImageMetadata[]>(metadataUrl, searchQuery);
                
                if(response.result.length > 0) {
                    let imageUrl: string = response.result[0].OriginalImageEndpoint;
                    let actualImageUrl: string = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
                    return this.get<T>(actualImageUrl, opts);
                }
            } 
            
            //if no primary photo requested
            //primary photo requested but not found
            //return all images by default            
            let images: any = {};
                      
            for (let index = 0; index < metadata.result.length; index++) {
                let imageUrl: string = metadata.result[index].OriginalImageEndpoint;
                let actualImageUrl: string = imageUrl.substring(imageUrl.indexOf('/images/personnel/'));
                let response: ResponseData<Image> = await this.get<Image>(actualImageUrl, opts);
                
                let imageName: string = metadata.result[index].ImageName;
                let imageBase64: string = response.result.Data;

                images[imageName] = imageBase64;
            }            
            return {
                success: true,
                error: null,
                message: null,
                result: images
            };

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