/**
 * @example Read all Opportunity PrimaryCategories
 * ```
 * client.get<PrimaryCategory[]>('/opportunities/primarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 * @example Read an Opportunity's PrimaryCategories
 * ```
 * client.get<PrimaryCategory[]>('/opportunities/12345/primarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 * @example Add PrimaryCategory to an Opportunity
 * ```
 * // payload is an array of PrimaryCategories elements to be added
 * client.post<PrimaryCategory[]>('/opportunities/12345/primarycategories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 *
 * @example Read all Lead PrimaryCategories
 * ```
 * client.get<PrimaryCategory[]>('/leads/primarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 * @example Read a Lead's PrimaryCategories
 * ```
 * client.get<PrimaryCategory[]>('/leads/12345/primarycategories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 * @example Add PrimaryCategory to a Lead
 * ```
 * // payload is an array of PrimaryCategories elements to be added
 * client.post<PrimaryCategory[]>('/leads/12345/primarycategories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PrimaryCategoryId); });
 *      }
 * });
 * ```
 */
export interface PrimaryCategory {
  PrimaryCategoryId: number;
  CategoryName: string;
  IsIndustryStandard: boolean;
  IsAvailable: boolean;
  IsDeleted: boolean;
  LastModifyDate: string;
  IsDefault: boolean;
  ExternalCategoryId: string;
  ProjectTypeCode: string;
}
