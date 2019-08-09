/**
 * Represents the Lead Source.
 * @example Read all Leads Sources
 * ```
 * client.get<LeadSource[]>('/leads/source').then( (res) => {
 *      if (res.success) { //returns an array of lead Source elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead Sources
 * ```
 * client.get<LeadSource[]>('/leads/5555999/source').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Sources to a lead
 * ```
 * // payload is an array of LeadSource elements to be added
 * client.post<LeadSource[]>('/leads/5555999/source', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadSource {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
