/**
 * Represents the Contact Relationships.
 * ```
 * @example Read a Contact's relationships
 * ```
 * client.get<ContactRelationship[]>('/contacts/5555999/relationships').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactRelationshipId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add relationship to a contact's relationships
 * ```
 * // payload is an array of relationship elements to be added
 * client.post<ContactRelationship[]>('/contacts/5555999/relationships', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ContactRelationshipId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
