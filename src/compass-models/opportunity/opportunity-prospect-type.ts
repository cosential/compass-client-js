/**
 * Represents the Opportunity Prospect Type.
 * @example Read all Opportunity Prospect types
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/prospecttype').then( (res) => {
 *      if (res.success) { //returns an array of opportunity prospect type elements
 *          res.result.forEach( (index) => { console.log(index.ProspectTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's delivery methods
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/2178463/deliverymethod').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ProspectTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add delivery method to a opportunity
 * ```
 * // payload is an array of OpportunityProspectType elements to be added
 * client.post<OpportunityProspectType[]>('/opportunities/2178463/deliverymethod', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ProspectTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityProspectType {
  ProspectTypeId: number;
  ProspectTypeName: string;
  IsDeleted: boolean;
}
