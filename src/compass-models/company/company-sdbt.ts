/**
 * Represents the Company SDBT.
 * @example Read all Company SDBTs
 * ```
 * client.get<CompanySDBT[]>('/companies/sdbt').then( (res) => {
 *      if (res.success) { //returns an array of contact SDBT elements
 *          res.result.forEach( (index) => { console.log(index.CompanySDBTID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's SDBTs
 * ```
 * client.get<CompanySDBT[]>('/companies/5555999/sdbt').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.CompanySDBTID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add SDBTs to a Company
 * ```
 * // payload is an array of CompanySDBT elements to be added
 * client.post<CompanySDBT[]>('/companies/5555999/sdbt', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.CompanySDBTID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanySDBT {
  Id: number;
  Name: string;
}
