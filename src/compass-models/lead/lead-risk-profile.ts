/**
 * Represents the Lead RiskProfile.
 * @example Read all Leads RiskProfiles
 * ```
 * client.get<LeadRiskProfile[]>('/leads/riskprofile').then( (res) => {
 *      if (res.success) { //returns an array of lead RiskProfile elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead RiskProfiles
 * ```
 * client.get<LeadRiskProfile[]>('/leads/5555999/riskprofile').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add RiskProfiles to a lead
 * ```
 * // payload is an array of LeadRiskProfile elements to be added
 * client.post<LeadRiskProfile[]>('/leads/5555999/riskprofile', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
