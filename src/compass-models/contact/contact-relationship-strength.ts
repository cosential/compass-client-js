/**
 * @example Read all Contact Relationship options
 * ```
 * client.get<ContactMailingList[]>('/contacts/relationships/relationshipstrength').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface ContactRelationshipStrength {
  Id: number;
  Name: string;
  IsDeleted: boolean;
  IsViewable: boolean;
  MinimumNumber: number;
  MaximumNumber: number;
}
