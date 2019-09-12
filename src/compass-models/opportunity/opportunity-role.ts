/**
 * Represents the Opportunity Role.
 * @example Read all Opportunity Roles
 * ```
 * client.get<OpportunityRole[]>('/opportunities/role').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.RoleId); });
 *      }
 * });
 * ```
 * @example Read a Opportunity's Roles
 * ```
 * client.get<OpportunityRole[]>('/opportunities/12345/role').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.RoleId); });
 *      }
 * });
 * ```
 * @example Add Role to a opportunity
 * ```
 * // payload is an array of OpportunityRole elements to be added
 * client.post<OpportunityRole[]>('/opportunities/12345/role', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.RoleId); });
 *      }
 * });
 * ```
 */
export interface OpportunityRole {
  RoleId: number;
  RoleName: string;
  AvailableRole: boolean;
}
