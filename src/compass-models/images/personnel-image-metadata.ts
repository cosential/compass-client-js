/**
 * Represents the image metadata for a Personnel.
 * @example Read images metadata for a Personnel
 * ```
 * client.get<PersonnelImageMetadata[]>('/personnel/5556666/images').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.ImageSizeKB); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface PersonnelImageMetadata {
  PersonnelId: number;
  ImageId: number;
  ImageName: string;
  Caption: string;
  Credit: string;
  Keywords: string;
  NetworkPath: string;
  CDRomPath: string;
  OrderNumber: string;
  Comments: string;
  UploadDate: string;
  Device: string;
  latitude: number;
  longitude: number;
  ImageHash: string;
  ImageSizeKB: number;
  OriginalImageEndpoint: string;
  WebsiteImageEndpoint: string;
  ThumbnailImageEndpoint: string;
  PrimaryPhoto: boolean;
}
