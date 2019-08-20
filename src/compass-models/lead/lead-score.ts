/**
 * Represents the Lead Score.
 * @example Read all Leads Scores
 * ```
 * client.get<LeadScore[]>('/leads/score').then( (res) => {
 *      if (res.success) { //returns an array of lead Score elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead Scores
 * ```
 * client.get<LeadScore[]>('/leads/5555999/score').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Scores to a lead
 * ```
 * // payload is an array of LeadScore elements to be added
 * client.post<LeadScore[]>('/leads/5555999/score', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
