/**
 * Represents the Studios.
 * @example Read all Contact Studios
 * ```
 * client.get<Studio[]>('/contacts/studios').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 * @example Read a Contact's Studios
 * ```
 * client.get<Studio[]>('/contacts/12345/studios').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 * @example Add Studios to a Contact
 * ```
 * // payload is an array of Studio elements to be added
 * client.post<Studio[]>('/contacts/12345/studios', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 * @example Read all Company Studios
 * ```
 * client.get<Studio[]>('/companies/studios').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 * @example Read a Company's Studios
 * ```
 * client.get<Studio[]>('/companies/12345/studios').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 * @example Add Studios to a Company
 * ```
 * // payload is an array of Studio elements to be added
 * client.post<Studio[]>('/companies/12345/studios', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StudioId); });
 *      }
 * });
 * ```
 */
export interface Studio {
  StudioId: number;
  StudioName: string;
  StudioAcronym: string;
  StudioAddress1: string;
  StudioAddress2: string;
  StudioCity: string;
  StudioStateID: number;
  StudioZip: string;
  StudioCountryID: number;
  StudioPhone: string;
  StudioFax: string;
  StudioEmail: string;
  StudioUrl: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_studioid: string;
  StudioSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  AssociatedServices: string;
  ROW_VERSION: string;
}
