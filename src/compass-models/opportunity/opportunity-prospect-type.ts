/**
 * Represents the Opportunity ProspectType.
 * @example Read all Opportunity ProspectTypes
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/prospecttype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProspectTypeId); });
 *      }
 * });
 * ```
 * @example Read a Opportunity's ProspectTypes
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/12345/prospecttype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProspectTypeId); });
 *      }
 * });
 * ```
 * @example Add ProspectType to a opportunity
 * ```
 * // payload is an array of OpportunityProspectType elements to be added
 * client.post<OpportunityProspectType[]>('/opportunities/12345/prospecttype', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProspectTypeId); });
 *      }
 * });
 * ```
 */
export interface OpportunityProspectType {
  ProspectTypeId: number;
  ProspectTypeName: string;
  IsDeleted: boolean;
}
