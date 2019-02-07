/**
 * Represents an Image.
 * @example Read a Contact's profile image
 * ```
 * client.getContactImage<Image>(5555666, 'profilepicture').then( (res) => {
 *      if(res.success){ //success //returns an image as a base64 encoded string
 *          //returns profile picture by default or for an invalid image type unless otherwise specified
 *          //expect an empty result for no associated image          
 *          console.log(res.result.Data);
 *      } else { //something went wrong 
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read primary image of a personnel
 * ```
 * client.getPersonnelImage<Image>(5555666, true).then( (res) => {
 *      if(res.success){ //success //returns an image as a base64 encoded string
 *          //returns primary image by default. Else, the most recent one.
 *          //expect an empty result for no associated image          
 *          console.log(res.result.Data);
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
