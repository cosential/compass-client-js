/**
 * Represents the Contact type.
 * @example Read all Contacts types
 * ```
 * client.get<ContactType[]>('/contacts/Contact_ContactTypes').then( (res) => {
 *      if (res.success) { //returns an array of contact type elements
 *          res.result.forEach( (index) => { console.log(index.ContactTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's contact types
 * ```
 * client.get<ContactType[]>('/contacts/5555999/contact_contacttypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add types to a contact
 * ```
 * // payload is an array of ContactType elements to be added
 * client.post<ContactType[]>('/contacts/5555999/contact_contacttypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactType {
  ContactTypeID: number;
  ContactTypeName: string;
  Description: string;
  AvailableType: number;
  ContactTypeOrder: number;
  DeleteRecord: boolean;
  CreateDate: Date;
  Old_ID: string;
}
