/**
 * @example Read all Lead RiskProfiles
 * ```
 * client.get<LeadRiskProfile[]>('/leads/riskprofile').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's lead RiskProfiles
 * ```
 * client.get<LeadRiskProfile[]>('/leads/12345/riskprofile').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add RiskProfiles to a Lead
 * ```
 * // payload is an array of LeadRiskProfile elements to be added
 * client.post<LeadRiskProfile[]>('/leads/12345/riskprofile', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadRiskProfile {
  Id: number;
  Name: string;
  Description: string;
  RiskProfileType: string;
  IsDeleted: boolean;
}
