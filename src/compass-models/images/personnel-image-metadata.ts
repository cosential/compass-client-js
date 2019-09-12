/**
 * @example Read Image Metadata for a Personnel
 * ```
 * client.get<PersonnelImageMetadata[]>('/personnel/12345/images').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.ImageId); });
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
