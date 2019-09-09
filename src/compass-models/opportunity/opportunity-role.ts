/**
 * Represents the Opportunity Role.
 * @example Read all Opportunity roles
 * ```
 * client.get<OpportunityRole[]>('/opportunities/role').then( (res) => {
 *      if (res.success) { //returns an array of opportunity role elements
 *          res.result.forEach( (index) => { console.log(index.RoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's role
 * ```
 * client.get<OpportunityRole[]>('/opportunities/2178463/role').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.RoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add role to a opportunity
 * ```
 * // payload is an array of OpportunityRole elements to be added
 * client.post<OpportunityRole[]>('/opportunities/2178463/role', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.RoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityRole {
  RoleId: number;
  RoleName: string;
  AvailableRole: boolean;
}
