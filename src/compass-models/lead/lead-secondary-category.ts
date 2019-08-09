/**
 * Represents the Lead SecondaryCategory.
 * @example Read all Leads SecondaryCategories
 * ```
 * client.get<LeadSecondaryCategory[]>('/leads/secondarycategories').then( (res) => {
 *      if (res.success) { //returns an array of lead SecondaryCategory elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's SecondaryCategories
 * ```
 * client.get<LeadSecondaryCategory[]>('/leads/5555999/secondarycategories').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add SecondaryCategories to a lead
 * ```
 * // payload is an array of LeadSecondaryCategory elements to be added
 * client.post<LeadSecondaryCategory[]>('/leads/5555999/secondarycategories', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadSecondaryCategory {
  SecondaryCategoryId: number;
  SecondaryCategoryName: string;
  IndustryStd: boolean;
  AvailableCat: boolean;
  DeleteCat: boolean;
  LastModifyDate: string;
  DefaultCat: boolean;
  Old_CatId: string;
}
