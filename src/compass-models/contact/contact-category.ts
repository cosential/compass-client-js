/**
 * Represents the Contact category.
 * @example Read all Contacts categories
 * ```
 * client.get<ContactCategory[]>('/contacts/Contact_Category').then( (res) => {
 *      if (res.success) { //returns an array of contact type elements
 *          res.result.forEach( (index) => { console.log(index.ContactCategoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's contact types
 * ```
 * client.get<ContactCategory[]>('/contacts/5555999/Contact_Category').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactCategoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add types to a contact
 * ```
 * // payload is an array of ContactType elements to be added
 * client.post<ContactCategory[]>('/contacts/5555999/Contact_Category', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactCategoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactCategory {
    ContactCategoryID: number;
    ContactCategoryName: string;
    Description: string;
    AvailableType: number,
    ContactCategoryOrder: number,
    CreateDate: Date;
    DeleteRecord: boolean;
    Old_ID: string;
}