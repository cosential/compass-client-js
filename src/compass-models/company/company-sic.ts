/**
 * Represents the Company SIC.
 * @example Read all Company SICs
 * ```
 * client.get<CompanySIC[]>('/companies/sic').then( (res) => {
 *      if (res.success) { //returns an array of contact SIC elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's SICs
 * ```
 * client.get<CompanySIC[]>('/companies/5555999/sic').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add SICs to a Company
 * ```
 * // payload is an array of CompanySIC elements to be added
 * client.post<CompanySIC[]>('/companies/5555999/sic', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanySIC {
  Name: string;
  Code: string;
  Id: number;
}
