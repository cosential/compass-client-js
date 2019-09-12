/**
 * @example Read all Company SICs
 * ```
 * client.get<CompanySIC[]>('/companies/sic').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Company's SICs
 * ```
 * client.get<CompanySIC[]>('/companies/12345/sic').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add SICs to a Company
 * ```
 * // payload is an array of CompanySIC elements to be added
 * client.post<CompanySIC[]>('/companies/12345/sic', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface CompanySIC {
  Name: string;
  Code: string;
  Id: number;
}
