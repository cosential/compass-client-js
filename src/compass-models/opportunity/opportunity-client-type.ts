/**
 * Represents the Opportunity Client Types.
 * @example Read all Opportunity Client Types
 * ```
 * client.get<OpportunityClientType[]>('/opportunities/clienttypes').then( (res) => {
 *      if (res.success) { //returns an array of opportunity client type elements
 *          res.result.forEach( (index) => { console.log(index.ClientTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunities client types
 * ```
 * client.get<OpportunityClientType[]>('/opportunities/2178463/clienttypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ClientTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add client type to a opportunity
 * ```
 * // payload is an array of OpportunityClientType elements to be added
 * client.post<OpportunityClientType[]>('/opportunities/2178463/clienttypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ClientTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityClientType {
    ClientTypeID: number;
    ClientTypeName: string;
}
