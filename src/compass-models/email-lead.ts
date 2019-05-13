/**
 * Represents a Lead associated to an Email.
 * @example Read leads associated to an email
 * ```
 * client.get<EmailLead[]>('/emails/5556666/leads').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.LeadId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a lead associated to an Email
 * ```
 * client.get<EmailLead>('/emails/5556666/leads/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.LeadId + ' ' + res.result.LeadName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate leads to an Email
 * ```
 * //payload is an array of LeadId's to be added
 * client.post<EmailLead[]>('/emails/5556666/leads', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Lead with id as " + index.LeadId) + "." } );
 *      } else { //something went wrong
 *          console.log("Lead association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated leads. This removes the association.
 * ```
 * client.delete<EmailLead[]>('/emails/5556666/leads').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated lead. This removes the association.
 * ```
 * client.delete<EmailLead>('/emails/5556666/leads/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailLead {
  LeadId: number;
  LeadName: string;
}
