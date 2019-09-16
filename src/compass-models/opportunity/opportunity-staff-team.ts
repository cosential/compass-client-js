import { Personnel } from '../personnel';
import { OpportunityStaffRole } from './opportunity-staff-role';

export interface OpportunityStaffTeam {
  OppStaffTeamID: number;
  PercentInvolved: number;
  SalesCredit: number;
  Description: string;
  SF330_TeamInd: number;
  Personnel: Personnel;
  StaffRole: OpportunityStaffRole;
}
