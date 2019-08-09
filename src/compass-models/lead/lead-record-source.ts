/**
 * Represents the Lead Record Source.
 * @example Read all Leads Record Sources
 * ```
 * client.get<LeadRecordSource[]>('/leads/recordsource').then( (res) => {
 *      if (res.success) { //returns an array of lead Record Source elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead Record Sources
 * ```
 * client.get<LeadRecordSource[]>('/leads/5555999/recordsource').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add Record Sources to a lead
 * ```
 * // payload is an array of LeadRecordSource elements to be added
 * client.post<LeadRecordSource[]>('/leads/5555999/recordsource', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadRecordSource {
  Id: number;
  Name: string;
  IsDeleted: boolean;
  IsAvailable: boolean;
  IsDefault: boolean;
}
