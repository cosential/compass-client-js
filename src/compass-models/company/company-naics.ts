/**
 * @example Read all Company NAICSs
 * ```
 * client.get<CompanyNAICS[]>('/companies/naics').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Company's NAICSs
 * ```
 * client.get<CompanyNAICS[]>('/companies/12345/naics').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add NAICSs to a Company
 * ```
 * // payload is an array of CompanyNAICS elements to be added
 * client.post<CompanyNAICS[]>('/companies/12345/naics', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface CompanyNAICS {
    Code: string;
    Name: string;
    Id: number;
}