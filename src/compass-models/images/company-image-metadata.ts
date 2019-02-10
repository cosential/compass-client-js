/**
 * Represents the image metadata for a Company.
 * @example Read images metadata for a Company
 * ```
 * client.get<CompanyImageMetadata[]>('/companies/5556666/images').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.ImageUrl); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanyImageMetadata {
  Entity: string;
  ImageType: string;
  ImageUrl: string;
}
