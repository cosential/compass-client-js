import { Personnel } from '../personnel';
import { OpportunityStaffRole } from './opportunity-staff-role';

/**
 * @example Read a Opportunity's StaffTeam
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/12345/staffteam').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OppStaffTeamID); });
 *      }
 * });
 * ```
 * @example Add StaffTeam to an Opportunity
 * ```
 * // payload is an array of OpportunityStaffTeam elements to be added
 * client.post<OpportunityStaffTeam[]>('/opportunities/12345/staffteam', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OppStaffTeamID); });
 *      }
 * });
 * ```
 */
export interface OpportunityStaffTeam {
  OppStaffTeamID: number;
  PercentInvolved: number;
  SalesCredit: number;
  Description: string;
  SF330_TeamInd: number;
  Personnel: Personnel;
  StaffRole: OpportunityStaffRole;
}
