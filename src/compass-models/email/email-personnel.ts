/**
 * Represents a Personnel associated to an Email.
 * @example Read personnel associated to an email
 * ```
 * client.get<EmailPersonnel[]>('/emails/5556666/personnel').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.PersonnelId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a personnel associated to an Email
 * ```
 * client.get<EmailPersonnel>('/emails/5556666/personnel/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.LastName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate personnel to an Email
 * ```
 * //payload is an array of PersonnelId's to be added
 * client.post<EmailPersonnel[]>('/emails/5556666/personnel', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Personnel with id as " + index.ContactId) + "." } );
 *      } else { //something went wrong
 *          console.log("Personnel association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated personnel. This removes the association.
 * ```
 * client.delete<EmailPersonnel[]>('/emails/5556666/personnel').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated personnel. This removes the association.
 * ```
 * client.delete<EmailPersonnel>('/emails/5556666/personnel/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailPersonnel {
  PersonnelId: number;
  Prefix: string;
  FirstName: string;
  MI: string;
  LastName: string;
  Suffix: string;
  Title: string;
}
