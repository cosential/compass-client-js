/**
 * Represents the Company LSO.
 * @example Read all Company LSOs
 * ```
 * client.get<CompanyLSO[]>('/companies/legalstructure').then( (res) => {
 *      if (res.success) { //returns an array of contact LSO elements
 *          res.result.forEach( (index) => { console.log(index.LSOID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's LSOs
 * ```
 * client.get<CompanyLSO[]>('/companies/5555999/legalstructure').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.LSOID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add LSOs to a Company
 * ```
 * // payload is an array of CompanyLSO elements to be added
 * client.post<CompanyLSO[]>('/companies/5555999/legalstructure', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.LSOID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanyLSO {
  LSOID: number;
  LSOName: string;
  IsDeleted: boolean;
}
