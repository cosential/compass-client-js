/**
 * Represents the image metadata for a Project.
 * @example Read images metadata for a Project
 * ```
 * client.get<ProjectImageMetadata[]>('/projects/5556666/images').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.OriginalImageEndpoint); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ProjectImageMetadata {
  ProjectId: number;
  ProjectName: string;
  ProjectNumber: string;
  ImageId: number;
  ImageName: string;
  Caption: string;
  Credit: string;
  Keywords: string;
  IsWebsiteImage: boolean;
  IsWebsiteThumbnail: boolean;
  NetworkPath: string;
  CDRomPath: string;
  ImageNumber: string;
  OrderNumber: number;
  AccessLevel: string;
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
}
