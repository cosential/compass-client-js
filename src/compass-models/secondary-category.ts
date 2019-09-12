/**
 * @example Read all Opportunity SecondaryCategories
 * ```
 * client.get<SecondaryCategory[]>('/opportunities/secondarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
 *      }
 * });
 * ```
 * @example Read an Opportunity's SecondaryCategories
 * ```
 * client.get<SecondaryCategory[]>('/opportunities/12345/secondarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
 *      }
 * });
 * ```
 * @example Add SecondaryCategory to an Opportunity
 * ```
 * // payload is an array of SecondaryCategories elements to be added
 * client.post<SecondaryCategory[]>('/opportunities/12345/secondarycategories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
 *      }
 * });
 * ```
 *
 * @example Read all Lead SecondaryCategories
 * ```
 * client.get<SecondaryCategory[]>('/leads/secondarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
 *      }
 * });
 * ```
 * @example Read a Lead's SecondaryCategories
 * ```
 * client.get<SecondaryCategory[]>('/leads/12345/secondarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
 *      }
 * });
 * ```
 * @example Add SecondaryCategory to a Lead
 * ```
 * // payload is an array of SecondaryCategories elements to be added
 * client.post<SecondaryCategory[]>('/leads/12345/secondarycategories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.SecondaryCategoryId); });
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
