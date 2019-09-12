/**
 * @example Read all Lead Scores
 * ```
 * client.get<LeadScore[]>('/leads/score').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's lead Scores
 * ```
 * client.get<LeadScore[]>('/leads/12345/score').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Scores to a Lead
 * ```
 * // payload is an array of LeadScore elements to be added
 * client.post<LeadScore[]>('/leads/12345/score', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadScore {
  Id: number;
  Score: number;
  Description: string;
  IsDeleted: boolean;
}
