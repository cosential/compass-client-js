/**
 * Represents an Image.
 * @example Read a Contact's profile image
 * ```
 * contactClient.getContactImages<Image>('12345', 2).then(res => {
 *      if (res.success) { //success //returns profile image as a base64 encoded string
 *          console.log(res.result.Data);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read all images for a Contact
 * ```
 * contactClient.getContactImages<any>('12345', 1).then(res => {
 *      if (res.success) { //success //returns all images as an object containing base64 for each
 *          //return all images is the default behavior in case of no image type
 *          console.log(res.result);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Update a Contact's profile image
 * ```
 * // testImageData is a string containing raw base 64 encoded image data
 * contactClient.updateContactImage<Image>('12345', 'profilepicture', 'image/jpeg', testImageData).then(res => {
 *      if (res.success) { //success
 *          console.log(res.result);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read primary image of a personnel
 * ```
 * personnelClient.getPersonnelImages<Image>('12345', true).then(res => {
 *      if (res.success) { //success //returns an image as a base64 encoded string
 *          console.log(res.result.Data);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read all images for a Personnel
 * ```
 * personnelClient.getPersonnelImages<any>('12345', false).then(res => {
 *      if (res.success) { //success //returns all images as an object containing base64 for each
 *          //return all images is the default behavior in case primary photo is not requested
 *          console.log(res.result);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface Image {
  ContentType: string;
  Data: string;
}
