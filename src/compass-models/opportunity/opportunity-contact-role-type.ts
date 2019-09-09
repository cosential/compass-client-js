/**
 * Represents the Opportunity Contact Role types
 * @example Read all Opportunity Contact Role Types
 * ```
 * client.get<OpportunityContactRoleType[]>('/projects/consultantcontacts/contactrole/contactroletype').then( (res) => {
 *      if (res.success) { //returns an array of opportunity client type elements
 *          res.result.forEach( (index) => { console.log(index.ContactRoleTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityContactRoleType {
  ContactRoleTypeId: number;
  ContactRoleTypeName: string;
  IsDeleted: boolean;
  IsDefault: boolean;
}
