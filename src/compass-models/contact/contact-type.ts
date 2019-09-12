/**
 * @example Read all Contact Types
 * ```
 * client.get<ContactType[]>('/contacts/Contact_Types').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactTypeID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Contact Types
 * ```
 * client.get<ContactType[]>('/contacts/12345/Contact_Types').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactTypeID); });
 *      }
 * });
 * ```
 * @example Add Types to a Contact
 * ```
 * // payload is an array of ContactType elements to be added
 * client.post<ContactType[]>('/contacts/12345/Contact_Types', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactTypeID); });
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
