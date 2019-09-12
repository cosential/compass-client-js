/**
 * @example Read Contacts associated to an Email
 * ```
 * client.get<EmailContact[]>('/emails/12345/contacts').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.ContactId); });
 *      }
 * });
 * ```
 * @example Read a Contact associated to an Email
 * ```
 * client.get<EmailContact>('/emails/12345/contacts/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.ContactId);
 *      }
 * });
 * ```
 * @example Associate Contacts to an Email
 * ```
 * // payload is an array of EmailContact elements to be added
 * client.post<EmailContact[]>('/emails/12345/contacts', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactId });
 *      }
 * });
 * ```
 * @example Remove Email associated Contacts. This removes the association.
 * ```
 * client.delete<EmailContact[]>('/emails/12345/contacts').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 */
export interface EmailContact {
  ContactId: number;
  FirstName: string;
  LastName: string;
}
