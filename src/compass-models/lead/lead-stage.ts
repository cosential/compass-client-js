/**
 * Represents the Lead Stage.
 * @example Read all Leads Stages
 * ```
 * client.get<LeadStage[]>('/leads/stage').then( (res) => {
 *      if (res.success) { //returns an array of lead Stage elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead Stages
 * ```
 * client.get<LeadStage[]>('/leads/5555999/stage').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Stages to a lead
 * ```
 * // payload is an array of LeadStage elements to be added
 * client.post<LeadStage[]>('/leads/5555999/stage', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
