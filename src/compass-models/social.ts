/**
 * Represents the Social Platform options.
 * @example Read a Contact's Socials
 * ```
 * client.get<Social[]>('/contacts/5555999/social').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Socials to a contact's Socials
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Social[]>('/contacts/5555999/social', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's Socials
 * ```
 * client.get<Social[]>('/companies/5555999/social').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Socials to a Company's Socials
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Social[]>('/companies/5555999/social', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface Social {
  Id: number;
  SocialNetworkId: number;
  SocialNetworkName: string;
  Url: string;
}