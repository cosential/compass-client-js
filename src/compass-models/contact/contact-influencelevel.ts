/**
 * @example Read all Contact Influence Levels
 * ```
 * client.get<ContactInfluenceLevel[]>('/contacts/influencelevel').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Contact's Contact Influence Levels
 * ```
 * client.get<ContactInfluenceLevel[]>('/contacts/12345/influencelevel').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Influence Levels to a Contact
 * ```
 * // payload is an array of ContactInfluenceLevel elements to be added
 * client.post<ContactInfluenceLevel[]>('/contacts/12345/influencelevel', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface ContactInfluenceLevel {
  Id: number,
  Name: string,
  IsDeleted: boolean,
  SortOrder: number
}
