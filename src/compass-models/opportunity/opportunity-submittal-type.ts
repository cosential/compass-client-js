/**
 * @example Read all Opportunity SubmittalTypes
 * ```
 * client.get<OpportunitySubmittalType[]>('/opportunities/submittaltype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SubmittalTypeId); });
 *      }
 * });
 * ```
 * @example Read a Opportunity's SubmittalTypes
 * ```
 * client.get<OpportunitySubmittalType[]>('/opportunities/12345/submittaltype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SubmittalTypeId); });
 *      }
 * });
 * ```
 * @example Add SubmittalType to an Opportunity
 * ```
 * // payload is an array of OpportunitySubmittalType elements to be added
 * client.post<OpportunitySubmittalType[]>('/opportunities/12345/submittaltype', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SubmittalTypeId); });
 *      }
 * });
 * ```
 */
export interface OpportunitySubmittalType {
  SubmittalTypeId: number;
  SubmittalTypeName: string;
}
