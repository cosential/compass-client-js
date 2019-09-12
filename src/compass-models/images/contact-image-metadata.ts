/**
 * @example Read Image Metadata for a Contact
 * ```
 * client.get<ContactImageMetadata[]>('/contacts/12345/images').then(res => {
 *      if (res.success) { //success
 *          res.result.forEach((nextRes) => { console.log(nextRes.ImageUrl); });
 *      }
 * });
 * ```
 */
export interface ContactImageMetadata {
  Entity: string;
  ImageType: string;
  ImageUrl: string;
}
