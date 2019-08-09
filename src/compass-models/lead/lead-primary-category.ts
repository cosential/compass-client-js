/**
 * Represents the Lead PrimaryCategory.
 * @example Read all Leads PrimaryCategories
 * ```
 * client.get<LeadPrimaryCategory[]>('/leads/primarycategories').then( (res) => {
 *      if (res.success) { //returns an array of lead PrimaryCategory elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's PrimaryCategories
 * ```
 * client.get<LeadPrimaryCategory[]>('/leads/5555999/primarycategories').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add PrimaryCategories to a lead
 * ```
 * // payload is an array of LeadPrimaryCategory elements to be added
 * client.post<LeadPrimaryCategory[]>('/leads/5555999/primarycategories', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadPrimaryCategory {
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
