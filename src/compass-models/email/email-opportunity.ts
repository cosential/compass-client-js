/**
 * Represents an Opportunity associated to an Email.
 * @example Read opportunities associated to an email
 * ```
 * client.get<EmailOpportunity[]>('/emails/5556666/opportunities').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.OpportunityId); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read an opportunity associated to an Email
 * ```
 * client.get<EmailOpportunity>('/emails/5556666/opportunities/8889999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.OpportunityId + ' ' + res.result.OpportunityName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Associate opportunities to an Email
 * ```
 * //payload is an array of OpportunityId's to be added
 * client.post<EmailOpportunity[]>('/emails/5556666/opportunities', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Associated Opportunity with id as " + index.OpportunityId) + "." } );
 *      } else { //something went wrong
 *          console.log("Opportunity association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated opportunities. This removes the association.
 * ```
 * client.delete<EmailOpportunity[]>('/emails/5556666/opportunities').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Remove Email associated opportunity. This removes the association.
 * ```
 * client.delete<EmailOpportunity>('/emails/5556666/opportunities/8889999').then( (res) => {
 *      if(res.success){ //association removed
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Removal of association failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface EmailOpportunity {
  OpportunityId: number;
  OpportunityName: string;
}
