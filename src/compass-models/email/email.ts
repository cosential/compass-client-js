/**
 * Represents the Email.
 * @example Read all Emails
 * ```
 * client.get<Email[]>('/emails').then( (res) => {
 *      if (res.success) { //returns an array of email elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read an Email
 * ```
 * client.get<Email>('/emails/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.Subject + ' ' + res.result.Body);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Email/s
 * ```
 * //payload is an array of Email elements to be added
 * client.post<Email[]>('/emails', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Email with id as " + index.Id) + "." } );
 *      } else { //something went wrong
 *          console.log("Email creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update an Email
 * ```
 * //payload is an Email element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Email>('/emails/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated email with Id as: " + res.result.Id);
 *      } else { //something went wrong
 *          console.log("Email update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete an Email
 * ```
 * client.delete<Email>('/emails/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Email/s with pagination
 * ```
 * let searchQuery = 'ExternalId:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
 * client.search<Email[]>('/emails', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 * @example Search Email/s without pagination
 * ```
 * let searchQuery = 'ExternalId:<UAT.12345.5555555566666.aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee.4444444455555@Cosential.UAT>';
 * client.searchForAll<Email>('/emails', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface Email {
  Id: number;
  EmailId: number;
  EmailGuid: string;
  ExternalId: string;
  Subject: string;
  From: string;
  To: string;
  Cc: string;
  Bcc: string;
  Body: string;
  SentDate: string;
  OpenedDate: string;
  Body_EmailFrom: string;
  Body_EmailTo: string;
  Body_EmailCc: string;
  Body_EmailDate: string;
  Body_RemainingEmails: string;
  Header: string;
  HTML: string;
  ActiveInd: boolean;
  DeleteRecord: boolean;
  UserId: number;
}
