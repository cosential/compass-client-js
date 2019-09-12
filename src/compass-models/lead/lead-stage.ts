/**
 * @example Read all Lead Stages
 * ```
 * client.get<LeadStage[]>('/leads/stage').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's Stages
 * ```
 * client.get<LeadStage[]>('/leads/12345/stage').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Stages to a Lead
 * ```
 * // payload is an array of LeadStage elements to be added
 * client.post<LeadStage[]>('/leads/12345/stage', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadStage {
  Id: number;
  Name: string;
  Description: string;
  StageType: string;
  IsDeleted: boolean;
}
