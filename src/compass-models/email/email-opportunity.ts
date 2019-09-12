/**
 * @example Read Opportunities associated to an Email
 * ```
 * client.get<EmailOpportunity[]>('/emails/12345/opportunities').then(res => {
 *      if (res.success) {
 *          res.result.forEach((nextRes) => { console.log(nextRes.OpportunityId); });
 *      }
 * });
 * ```
 * @example Read a Opportunity associated to an Email
 * ```
 * client.get<EmailOpportunity>('/emails/12345/opportunities/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.OpportunityId);
 *      }
 * });
 * ```
 * @example Associate Opportunities to an Email
 * ```
 * // payload is an array of EmailOpportunity elements to be added
 * client.post<EmailOpportunity[]>('/emails/12345/opportunities', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OpportunityId });
 *      }
 * });
 * ```
 * @example Remove Email associated Opportunities. This removes the association.
 * ```
 * client.delete<EmailOpportunity[]>('/emails/12345/opportunities').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 */
export interface EmailOpportunity {
  OpportunityId: number;
  OpportunityName: string;
}
