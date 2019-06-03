/**
 * Represents the Contact Influence Level.
 * @example Get all Influence Level values
 * ```
 * contactClient.get<ContactInfluenceLevel[]>('/contacts/influencelevel').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.Id); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read Influence Level of a Contact
 * ```
 * contactClient.get<ContactInfluenceLevel>('/contacts/123456/influencelevel').then( (res) => {
 *      if(res.success){ //success
 *          console.log(res.result[0].Id);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Update a Contact's Influence Level
 * // Payload is an array containing one object with a property "Id" corresponding to a valid Influence Level
 * ```
 * client.post<ContactInfluenceLevel[]>('/contacts/123456/influencelevel', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Set Contact to have Influence Level with id as " + index.Id) + "." } );
 *      } else { //something went wrong
 *          console.log("Call Log creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Clear a Contact's Influence Level
 * // Payload is an empty array
 * ```
 * client.post<ContactInfluenceLevel[]>('/contacts/123456/influencelevel', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          console.log("Cleared Contact's Influence Level.");
 *      } else { //something went wrong
 *          console.log("Call Log creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 */
export interface ContactInfluenceLevel {
  Id: number,
  Name: string,
  IsDeleted: boolean,
  SortOrder: number
}
