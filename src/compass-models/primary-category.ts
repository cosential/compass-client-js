/**
 * Represents the Primary Categories.
 * @example Read all Opportunity Primary Categories
 * ```
 * client.get<PrimaryCategory[]>('/opportunities/primarycategories').then( (res) => {
 *      if (res.success) { //returns an array of opportunity primary categories elements
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's primary categories
 * ```
 * client.get<PrimaryCategory[]>('/opportunities/2178463/primarycategories').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add primary category to a opportunity
 * ```
 * // payload is an array of primary categories elements to be added
 * client.post<PrimaryCategory[]>('/opportunities/2178463/primarycategories', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
