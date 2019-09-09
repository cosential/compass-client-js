/**
 * Represents the Opportunity Submittal Type.
 * @example Read all Opportunity Submittal Types
 * ```
 * client.get<OpportunitySubmittalType[]>('/opportunities/submittaltype').then( (res) => {
 *      if (res.success) { //returns an array of opportunity submittal type elements
 *          res.result.forEach( (index) => { console.log(index.SubmittalTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's submittal types
 * ```
 * client.get<OpportunitySubmittalType[]>('/opportunities/2178463/submittaltype').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.SubmittalTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add submittal type to a opportunity
 * ```
 * // payload is an array of OpportunitySubmittalType elements to be added
 * client.post<OpportunitySubmittalType[]>('/opportunities/2178463/submittaltype', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.SubmittalTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunitySubmittalType {
  SubmittalTypeId: number;
  SubmittalTypeName: string;
}
