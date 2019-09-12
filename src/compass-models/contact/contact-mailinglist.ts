/**
 * @example Read all Contact Mailing Lists
 * ```
 * client.get<ContactMailingList[]>('/contacts/Contact_MailingList').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.MailingListID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Contact Mailing Lists
 * ```
 * client.get<ContactMailingList[]>('/contacts/12345/Contact_MailingList').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.MailingListID); });
 *      }
 * });
 * ```
 * @example Add Mailing Lists to a Contact
 * ```
 * // payload is an array of ContactMailingList elements to be added
 * client.post<ContactMailingList[]>('/contacts/12345/Contact_MailingList', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.MailingListID); });
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
