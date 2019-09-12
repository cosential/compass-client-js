/**
 * @example Read Personnel associated to an Email
 * ```
 * client.get<EmailPersonnel[]>('/emails/12345/personnel').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.PersonnelId); });
 *      }
 * });
 * ```
 * @example Read a Personnel associated to an Email
 * ```
 * client.get<EmailPersonnel>('/emails/12345/personnel/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.PersonnelId);
 *      }
 * });
 * ```
 * @example Associate Personnel to an Email
 * ```
 * // payload is an array of EmailPersonnel elements to be added
 * client.post<EmailPersonnel[]>('/emails/12345/personnel', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PersonnelId });
 *      }
 * });
 * ```
 * @example Remove Email associated Personnel. This removes the association.
 * ```
 * client.delete<EmailPersonnel[]>('/emails/12345/personnel').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 */
export interface EmailPersonnel {
  PersonnelId: number;
  Prefix: string;
  FirstName: string;
  MI: string;
  LastName: string;
  Suffix: string;
  Title: string;
}
