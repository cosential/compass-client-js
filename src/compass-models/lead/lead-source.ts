/**
 * @example Read all Lead Sources
 * ```
 * client.get<LeadSource[]>('/leads/source').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's Sources
 * ```
 * client.get<LeadSource[]>('/leads/12345/source').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Sources to a Lead
 * ```
 * // payload is an array of LeadSource elements to be added
 * client.post<LeadSource[]>('/leads/12345/source', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadSource {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
