/**
 * @example Read all Emails
 * ```
 * client.get<Email[]>('/emails').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read an Email
 * ```
 * client.get<Email>('/emails/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.Id);
 *      }
 * });
 * ```
 * @example Add new Email(s)
 * ```
 * // payload is an array of Email elements to be added
 * client.post<Email[]>('/emails', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id) });
 *      }
 * });
 * ```
 * @example Update an Email
 * ```
 * // payload is an Email element containing new and existing values
 * client.put<Email>('/emails/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.Id);
 *      }
 * });
 * ```
 * @example Delete an Email
 * ```
 * client.delete<Email>('/emails/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search Email(s) with pagination
 * ```
 * let searchQuery = 'ExternalId:<UAT.12345.55555123456.aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee.4444444455555@Cosential.UAT>';
 * client.search<Email[]>('/emails', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id) });
 *      }
 * });
 * ```
 * @example Search Email/s without pagination
 * ```
 * let searchQuery = 'ExternalId:<UAT.12345.55555123456.aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee.4444444455555@Cosential.UAT>';
 * client.searchForAll<Email>('/emails', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id) });
 *      }
 * });
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
