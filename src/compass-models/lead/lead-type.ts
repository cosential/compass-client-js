/**
 * Represents the Lead Type.
 * @example Read all Leads Types
 * ```
 * client.get<LeadType[]>('/leads/leadtypes').then( (res) => {
 *      if (res.success) { //returns an array of lead Type elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead Types
 * ```
 * client.get<LeadType[]>('/leads/5555999/leadtypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Types to a lead
 * ```
 * // payload is an array of LeadType elements to be added
 * client.post<LeadType[]>('/leads/5555999/leadtypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadType {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
