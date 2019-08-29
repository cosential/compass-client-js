/**
 * Represents the Company NAICS.
 * @example Read all Company NAICSs
 * ```
 * client.get<CompanyNAICS[]>('/companies/naics').then( (res) => {
 *      if (res.success) { //returns an array of contact NAICS elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's NAICSs
 * ```
 * client.get<CompanyNAICS[]>('/companies/5555999/naics').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add NAICSs to a Company
 * ```
 * // payload is an array of CompanyNAICS elements to be added
 * client.post<CompanyNAICS[]>('/companies/5555999/naics', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanyNAICS {
    Code: string;
    Name: string;
    Id: number;
}