/**
 * Represents the Contact Role types
 * @example Read all Contact Role Types
 * ```
 * client.get<ContactRoleType[]>('/projects/consultantcontacts/contactrole/contactroletype').then( (res) => {
 *      if (res.success) { //returns an array of contact role type elements
 *          res.result.forEach( (index) => { console.log(index.ContactRoleTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactRoleType {
  ContactRoleTypeId: number;
  ContactRoleTypeName: string;
  IsDeleted: boolean;
  IsDefault: boolean;
}
