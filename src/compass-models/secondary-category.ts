/**
 * Represents the secondary Categories.
 * @example Read all Opportunity secondary Categories
 * ```
 * client.get<SecondaryCategory[]>('/opportunities/secondarycategories').then( (res) => {
 *      if (res.success) { //returns an array of opportunity secondary categories elements
 *          res.result.forEach( (index) => { console.log(index.SecondaryCategoryId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's secondary categories
 * ```
 * client.get<SecondaryCategory[]>('/opportunities/2178463/secondarycategories').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.SecondaryCategoryId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add secondary category to a opportunity
 * ```
 * // payload is an array of secondary categories elements to be added
 * client.post<SecondaryCategory[]>('/opportunities/2178463/secondarycategories', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.SecondaryCategoryId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface SecondaryCategory {
  SecondaryCategoryId: number;
  SecondaryCategoryName: string;
  IndustryStd: boolean;
  AvailableCat: boolean;
  DeleteCat: boolean;
  LastModifyDate: string;
  DefaultCat: boolean;
  Old_CatId: string;
}
