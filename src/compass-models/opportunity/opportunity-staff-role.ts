/**
 * Represents the Opportunity Staff Role.
 * @example Read all Opportunity staff Roles
 * ```
 * client.get<OpportunityStaffRole[]>('/opportunities/staffteam/staffteamroles').then( (res) => {
 *      if (res.success) { //returns an array of opportunity staff role elements
 *          res.result.forEach( (index) => { console.log(index.StaffRoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityStaffRole {
  StaffRoleId: number;
  StaffRoleName: string;
  StaffRoleType: string;
  Description: string;
  HourlyRate: number;
  IsAvailable: boolean;
  IsDeleted: boolean;
  ExternalId: string;
}
