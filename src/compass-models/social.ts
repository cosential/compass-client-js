/**
 * @example Read a Contact's Socials
 * ```
 * client.get<Social[]>('/contacts/12345/social').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Socials to a Contact
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Social[]>('/contacts/12345/social', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Company's Socials
 * ```
 * client.get<Social[]>('/companies/12345/social').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Socials to a Company's Socials
 * ```
 * // payload is an array of Social elements to be added
 * client.post<Social[]>('/companies/12345/social', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
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