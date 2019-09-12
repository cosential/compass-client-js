/**
 * @example Read Companies associated to an Email
 * ```
 * client.get<EmailCompany[]>('/emails/12345/companies').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.CompanyId); });
 *      }
 * });
 * ```
 * @example Read a Company associated to an Email
 * ```
 * client.get<EmailCompany>('/emails/12345/companies/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.CompanyId);
 *      }
 * });
 * ```
 * @example Associate Companies to an Email
 * ```
 * // payload is an array of EmailCompany elements to be added
 * client.post<EmailCompany[]>('/emails/12345/companies', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyId); });
 *      }
 * });
 * ```
 * @example Remove Email associated Companies. This removes the association.
 * ```
 * client.delete<EmailCompany[]>('/emails/12345/companies').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ``` 
 */
export interface EmailCompany {
  CompanyId: number;
  Name: string;
}
