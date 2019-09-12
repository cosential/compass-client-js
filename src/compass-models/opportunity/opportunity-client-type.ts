/**
 * @example Read all Opportunity ClientTypes
 * ```
 * client.get<OpportunityClientType[]>('/opportunities/clienttypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ClientTypeID); });
 *      }
 * });
 * ```
 * @example Read a Opportunities ClientTypes
 * ```
 * client.get<OpportunityClientType[]>('/opportunities/12345/clienttypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ClientTypeID); });
 *      }
 * });
 * ```
 * @example Add ClientType to a Opportunity
 * ```
 * // payload is an array of OpportunityClientType elements to be added
 * client.post<OpportunityClientType[]>('/opportunities/12345/clienttypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ClientTypeID); });
 *      }
 * });
 * ```
 */
export interface OpportunityClientType {
    ClientTypeID: number;
    ClientTypeName: string;
}
