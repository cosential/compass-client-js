/**
 * @example Read a Contact's Contact Relationships
 * ```
 * client.get<ContactRelationship[]>('/contacts/12345/relationships').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactRelationshipId); });
 *      }
 * });
 * ```
 * @example Add Relationships to a Contact
 * ```
 * // payload is an array of ContactRelationship elements to be added
 * client.post<ContactRelationship[]>('/contacts/12345/relationships', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactRelationshipId); });
 *      }
 * });
 * ```
 */
export interface ContactRelationship {
  ContactRelationshipId: number,
  UserId: number;
  FirstName: string;
  LastName: string;
  Relationship: string;
  RelationshipStrength: string;
  Phone: string;
  Email: string;
  ContactId: number;
}
