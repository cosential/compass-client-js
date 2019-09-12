/**
 * @example Read all Opportunity StaffRoles
 * ```
 * client.get<OpportunityStaffRole[]>('/opportunities/staffteam/staffteamroles').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StaffRoleId); });
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
