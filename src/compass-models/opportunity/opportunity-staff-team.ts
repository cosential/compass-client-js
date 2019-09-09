import { Personnel } from '../personnel';
import { OpportunityStaffRole } from './opportunity-staff-role';


/**
 * Represents the Opportunity STaff Team.
 * @example Read a Opportunity's staff team
 * ```
 * client.get<OpportunityProspectType[]>('/opportunities/2178463/staffteam').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OppStaffTeamID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add staff team to a opportunity
 * ```
 * // payload is an array of OpportunityStaffTeam elements to be added
 * client.post<OpportunityStaffTeam[]>('/opportunities/2178463/staffteam', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OppStaffTeamID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
