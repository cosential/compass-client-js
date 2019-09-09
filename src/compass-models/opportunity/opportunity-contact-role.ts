import { OpportunityContactRoleType } from "./opportunity-contact-role-type";

/**
 * Represents the Opportunity Contact Role.
 * @example Read all Opportunity Contact Roles
 * ```
 * client.get<OpportunityContactRole[]>('/projects/consultantcontacts/contactrole').then( (res) => {
 *      if (res.success) { //returns an array of opportunity contact role elements
 *          res.result.forEach( (index) => { console.log(index.ContactRoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityContactRole {
  ContactRoleId: number;
  ContactRoleName: string;
  IsDeleted: boolean;
  ContactRoleType: OpportunityContactRoleType;
}
