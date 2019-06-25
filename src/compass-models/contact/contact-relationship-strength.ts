/**
 * Represents the Contact Relationships strength.
 * ```
 * @example get all Contact relationships strengths
 * ```
 * client.get<ContactRelationshipStrength[]>('/contacts/relationships/relationshipstrength').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
