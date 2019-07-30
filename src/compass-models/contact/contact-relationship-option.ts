/**
 * Represents the Contact Relationships options.
 * ```
 * @example get all Contact relationships options
 * ```
 * client.get<ContactRelationshipOptions[]>('/contacts/relationships/relationship').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactRelationshipOption {
  Id: number;
  Name: string;
  IsDeleted: boolean;
}
