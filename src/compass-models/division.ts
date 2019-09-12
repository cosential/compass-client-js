/**
 * Represents the Divisions.
 * @example Read all Contact Divisions
 * ```
 * client.get<Division[]>('/contacts/divisions').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Divisions
 * ```
 * client.get<Division[]>('/contacts/12345/divisions').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 *      }
 * });
 * ```
 * @example Add Divisions to a Contact
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Division[]>('/contacts/12345/divisions', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 *      }
 * });
 * ```
 * @example Read all Company Divisions
 * ```
 * client.get<Division[]>('/companies/divisions').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 *      }
 * });
 * ```
 * @example Read a Company's Divisions
 * ```
 * client.get<Division[]>('/companies/12345/divisions').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 *      }
 * });
 * ```
 * @example Add Divisions to a Company
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Division[]>('/companies/12345/divisions', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DivisionID); });
 * });
 *      }
 * ```
 */
export interface Division {
  DivisionID: number;
  DivisionName: string;
  DivisionAccronym: string;
  DivisionAddress1: string;
  DivisionAddress2: string;
  DivisionCity: string;
  DivisionStateID: number;
  DivisionZip: string;
  DivisionCountryID: number;
  DivisionPhone: string;
  DivisionFax: string;
  DivisionEmail: string;
  DivisionURL: string;
  DunsID: string;
  OwnershipID: number;
  BusinessLicense: string;
  BusinessStatusID: number;
  YearFounded: number;
  TotalStaffNum: number;
  PreviousDivisionNames: string;
  PreviousDivision_YearFounded: string;
  PreviousDivision_DunsID: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_divisionid: string;
  divisionSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  ROW_VERSION: string;
}
