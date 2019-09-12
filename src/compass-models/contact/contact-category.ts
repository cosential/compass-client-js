/**
 * @example Read all Contact Categories
 * ```
 * client.get<ContactCategory[]>('/contacts/Contact_Category').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactCategoryID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Contact Categories
 * ```
 * client.get<ContactCategory[]>('/contacts/12345/Contact_Category').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactCategoryID); });
 *      }
 * });
 * ```
 * @example Add Categories to a Contact
 * ```
 * // payload is an array of ContactCategory elements to be added
 * client.post<ContactCategory[]>('/contacts/12345/Contact_Category', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactCategoryID); });
 *      }
 * });
 * ```
 */
export interface ContactCategory {
  ContactCategoryID: number;
  ContactCategoryName: string;
  Description: string;
  AvailableType: number;
  ContactCategoryOrder: number;
  CreateDate: Date;
  DeleteRecord: boolean;
  Old_ID: string;
}
