import { ContactRoleType } from "./contact-role-type";

/**
 * Represents the Contact Role.
 * @example Read all Contact Roles
 * ```
 * client.get<ContactRole[]>('/projects/consultantcontacts/contactrole').then( (res) => {
 *      if (res.success) { //returns an array of contact role elements
 *          res.result.forEach( (index) => { console.log(index.ContactRoleId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactRole {
  ContactRoleId: number;
  ContactRoleName: string;
  IsDeleted: boolean;
  ContactRoleType: ContactRoleType;
}
