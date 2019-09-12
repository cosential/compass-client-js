/**
 * @example Read all ContactRoleTypes
 * ```
 * client.get<ContactRoleType[]>('/projects/consultantcontacts/contactrole/contactroletype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactRoleTypeId); });
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
