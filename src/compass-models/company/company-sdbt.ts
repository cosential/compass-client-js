/**
 * @example Read all Company SDBTs
 * ```
 * client.get<CompanySDBT[]>('/companies/sdbt').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Company's SDBTs
 * ```
 * client.get<CompanySDBT[]>('/companies/12345/sdbt').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add SDBTs to a Company
 * ```
 * // payload is an array of CompanySDBT elements to be added
 * client.post<CompanySDBT[]>('/companies/12345/sdbt', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface CompanySDBT {
  Id: number;
  Name: string;
}
