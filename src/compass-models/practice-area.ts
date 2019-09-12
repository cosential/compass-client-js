/**
 * @example Read all Contact PracticeAreas
 * ```
 * client.get<PracticeArea[]>('/contacts/PracticeAreas').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 * @example Read a Contact's PracticeAreas
 * ```
 * client.get<PracticeArea[]>('/contacts/12345/PracticeAreas').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 * @example Add PracticeAreas to a Contact's
 * ```
 * // payload is an array of PracticeArea elements to be added
 * client.post<PracticeArea[]>('/contacts/12345/PracticeAreas', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 * @example Read all Company PracticeAreas
 * ```
 * client.get<PracticeArea[]>('/companies/PracticeAreas').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 * @example Read a Company's PracticeAreas
 * ```
 * client.get<PracticeArea[]>('/companies/12345/PracticeAreas').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 * @example Add PracticeAreas to a Company
 * ```
 * // payload is an array of PracticeArea elements to be added
 * client.post<PracticeArea[]>('/companies/12345/PracticeAreas', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.PracticeAreaId); });
 *      }
 * });
 * ```
 */
export interface PracticeArea {
  PracticeAreaId: number;
  PracticeAreaName: string;
  PracticeAreaAcronym: string;
  PracticeAreaAddress1: string;
  PracticeAreaAddress2: string;
  PracticeAreaCity: string;
  PracticeAreaStateID: number;
  PracticeAreaZip: string;
  PracticeAreaCountryID: number;
  PracticeAreaPhone: string;
  PracticeAreaFax: string;
  PracticeAreaEmail: string;
  PracticeAreaUrl: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_practiceareaid: string;
  practiceareaSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  ROW_VERSION: string;
}
