/**
 * @example Read all Company LSOs
 * ```
 * client.get<CompanyLSO[]>('/companies/legalstructure').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LSOID); });
 *      }
 * });
 * ```
 * @example Read a Company's LSOs
 * ```
 * client.get<CompanyLSO[]>('/companies/12345/legalstructure').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LSOID); });
 *      }
 * });
 * ```
 * @example Add LSOs to a Company
 * ```
 * // payload is an array of CompanyLSO elements to be added
 * client.post<CompanyLSO[]>('/companies/12345/legalstructure', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LSOID); });
 *      }
 * });
 * ```
 */
export interface CompanyLSO {
  LSOID: number;
  LSOName: string;
  IsDeleted: boolean;
}
