/**
 * @example Read all Lead Types
 * ```
 * client.get<LeadType[]>('/leads/leadtypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's Types
 * ```
 * client.get<LeadType[]>('/leads/12345/leadtypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Types to a Lead
 * ```
 * // payload is an array of LeadType elements to be added
 * client.post<LeadType[]>('/leads/12345/leadtypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadType {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
