/**
 * Represents the Contact Mailing List.
 * @example Get all Mailing Lists values
 * ```
 * contactClient.get<ContactMailingList[]>('/contacts/Contact_MailingList').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.MailingLIstID); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read Mailing Lists of a Contact
 * ```
 * contactClient.get<ContactMailingList[]>('/contacts/123456/Contact_MailingList').then( (res) => {
 *      if(res.success){ //success
 *          console.log(res.result[0].Id);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Update a Contact's Mailing Lists
 * // Payload is an array containing one object with a property "MailingListID" corresponding to a valid Mailing Lists
 * ```
 * client.post<ContactMailingList[]>('/contacts/123456/Contact_MailingList', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Set Contact to have Mailing List with id as " + index.MailingListId) + "." } );
 *      } else { //something went wrong
 *          console.log("Call Log creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Clear a Contact's Mailing Lists
 * // Payload is an empty array
 * ```
 * client.post<ContactMailingList[]>('/contacts/123456/Contact_MailingList', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          console.log("Cleared Contact's Mailing Lists.");
 *      } else { //something went wrong
 *          console.log("Call Log creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface ContactMailingList {
  MailingListID: number,
  MailingListName: string,
  DeleteType: boolean,
  AvailableType: boolean,
  CreateDate: string,
  DefaultType: boolean
}
