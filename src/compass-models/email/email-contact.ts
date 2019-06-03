/**
 * Represents a Contact associated to an Email.
 * @example Read contacts associated to an Email
 * ```
 * client.get<EmailContact[]>('/emails/5556666/contacts').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.ContactId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a contact associated to an Email
 * ```
 * client.get<EmailContact>('/emails/5556666/contacts/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.LastName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate contacts to an Email
 * ```
 * //payload is an array of ContactId's to be added
 * client.post<EmailContact[]>('/emails/5556666/contacts', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Contact with id as " + index.ContactId) + "." } );
 *      } else { //something went wrong
 *          console.log("Contact association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated contacts. This removes the association.
 * ```
 * client.delete<EmailContact[]>('/emails/5556666/contacts').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ``` 
 * @example Remove Email associated contact. This removes the association.
 * ```
 * client.delete<EmailContact>('/emails/5556666/contacts/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailContact {
  ContactId: number;
  FirstName: string;
  LastName: string;
}
