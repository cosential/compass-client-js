/**
 * @example Read Leads associated to an Email
 * ```
 * client.get<EmailLead[]>('/emails/12345/leads').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.LeadId); });
 *      }
 * });
 * ```
 * @example Read a Lead associated to an Email
 * ```
 * client.get<EmailLead>('/emails/12345/leads/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.LeadId);
 *      }
 * });
 * ```
 * @example Associate Leads to an Email
 * ```
 * // payload is an array of EmailLead elements to be added
 * client.post<EmailLead[]>('/emails/12345/leads', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LeadId });
 *      }
 * });
 * ```
 * @example Remove Email associated Leads. This removes the association.
 * ```
 * client.delete<EmailLead[]>('/emails/12345/leads').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 */
export interface EmailLead {
  LeadId: number;
  LeadName: string;
}
