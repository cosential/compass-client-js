import 'isomorphic-fetch';
import { Client } from './client';
import { RequestOptions, ResponseData } from '..';
import { Image } from '../compass-models/images/image';
import { ContactImageMetadata } from '../compass-models/images/contact-image-metadata';
import { PersonnelImageMetadata } from '../compass-models/images/personnel-image-metadata';

/**
 * Represents the Client service for Images
 */
export class ImageClient extends Client {    
    
    /**
     * Returns a requested Contact Image.
     * @param contactId - Cosential contact id
     * @param imageType - Required image type ['ProfilePicture' (default), 'CardFront', 'CardBack']
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getContactImage<T>(contactId: number, imageType: string = 'ProfilePicture', opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {        
        let res: ResponseData<ContactImageMetadata[]> = await this.getContactImagesMetadata<ContactImageMetadata[]>(contactId, opts);
        if(res.result != null && res.result.length > 0){
            let typeOfImage = imageType.toLowerCase();
            let actualImageUrl = '/images/contact/' + contactId + '/ProfilePicture';
        
            if(typeOfImage == 'profilepicture' || typeOfImage == 'cardfront' || typeOfImage == 'cardback'){
                actualImageUrl = '/images/contact/' + contactId + '/' + imageType;            
            } 
            
            return await this.get<T>(actualImageUrl, opts);   
        } else {
            return {
                success: true,
                error: null,
                message: 'No associated image found',
                result: null
            };
        }
    }

    /**
     * Returns metadata for Contact Images.
     * @param contactId - Cosential contact id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getContactImagesMetadata<T>(contactId: number, opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {        
        let metadataUrl = '/contacts/' + contactId + '/images';
        return await this.get<T>(metadataUrl, opts);
    }

    /**
     * Returns a Personnel Image.
     * @param personnelId - Cosential personnel id
     * @param primaryPhoto - Returns Primary Photo if true (also default). Else, most recent one.
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getPersonnelImage<T>(personnelId: number, primaryPhoto: boolean = true, opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {        
        let res: ResponseData<PersonnelImageMetadata[]> = await this.getPersonnelImagesMetadata<PersonnelImageMetadata[]>(personnelId, opts);
        if(res.result != null && res.result.length > 0){
            let actualImageUrl = '';
            if(primaryPhoto){
                res.result.forEach((index) => {
                    let imageEndpoint = index.OriginalImageEndpoint;
                    if(index.PrimaryPhoto) {
                        actualImageUrl = imageEndpoint.substring(imageEndpoint.indexOf('/images/personnel/'));
                        //for some reason the object is not returned until all the iterations are complete
                        //return this.get<T>(actualImageUrl, opts)
                    }
                });

                if (actualImageUrl != '') { 
                    return await this.get<T>(actualImageUrl, opts)
                } else {
                    return {
                        success: true,
                        error: null,
                        message: 'No primary photo set for this personnel',
                        result: null
                    };
                }
            } else {
                let imageEndpoint = res.result[0].OriginalImageEndpoint;
                actualImageUrl = imageEndpoint.substring(imageEndpoint.indexOf('/images/personnel/'));                
                return await this.get<T>(actualImageUrl, opts);
            }    
        } else {
            return {
                success: true,
                error: null,
                message: 'No associated image found or Invalid personnel id',
                result: null
            };
        }
    }

    /**
     * Returns metadata for Personnel Images.
     * @param personnelId - Cosential personnel id
     * @param opts - Optional request headers
     * @returns A detailed response object as a Promise
     */
    public async getPersonnelImagesMetadata<T>(personnelId: number, opts: RequestOptions = {showErrors: true}): Promise<ResponseData<T>> {        
        let metadataUrl = '/personnel/' + personnelId + '/images';
        return await this.get<T>(metadataUrl, opts);
    }
}