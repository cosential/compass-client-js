import { ContactRoleType } from "./contact-role-type";

/**
 * @example Read all Contact Roles
 * ```
 * client.get<ContactRole[]>('/projects/consultantcontacts/contactrole').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactRoleId); });
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
