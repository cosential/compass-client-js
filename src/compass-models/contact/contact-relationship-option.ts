/**
 * @example Read all Contact Relationship options
 * ```
 * client.get<ContactMailingList[]>('/contacts/relationships/relationship').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface ContactRelationshipOption {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
