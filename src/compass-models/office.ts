/**
 * Represents the Offices.
 * @example Read all Contact Offices
 * ```
 * client.get<Office[]>('/contacts/offices').then(res => {
 *      if (res.success) { //returns an array of office elements
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Offices
 * ```
 * client.get<Office[]>('/contacts/12345/offices').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 * @example Add Offices to a Contact
 * ```
 * // payload is an array of Offices elements to be added
 * client.post<Office[]>('/contacts/12345/offices', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 * @example Read all Company Offices
 * ```
 * client.get<Office[]>('/companies/offices').then(res => {
 *      if (res.success) { //returns an array of office elements
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 * @example Read a Company's Offices
 * ```
 * client.get<Office[]>('/companies/12345/offices').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 * @example Add Offices to a Company
 * ```
 * // payload is an array of Offices elements to be added
 * client.post<Office[]>('/companies/12345/offices', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OfficeID); });
 *      }
 * });
 * ```
 */
export interface Office {
  OfficeID: number;
  OfficeName: string;
  OfficeAcronym: string;
  HeadquarterIndicator: number;
  OfficeAddress1: string;
  OfficeAddress2: string;
  OfficeCity: string;
  OfficeStateID: number;
  OfficeZip: string;
  OfficeCounty: string;
  OfficeCountryID: number;
  OfficePhone: string;
  OfficeFax: string;
  OfficeEmail: string;
  OfficeURL: string;
  FederalID: string;
  DunsID: string;
  AcassID: string;
  BusinessLicense: string;
  BusinessStatusID: number;
  TotalStaffNum: number;
  InsuranceCoverage: string;
  InsuranceCarrier: string;
  OwnershipID: number;
  PreviousFirmNames: string;
  YearFounded: string;
  PreviousFirm_YearFounded: number;
  PreviousFirm_DunsID: string;
  ServicesProvided: string;
  DeleteIndicator: boolean;
  CreateDate: Date;
  ModifyDate: Date;
  UserID: number;
  old_officeid: string;
  officeSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  GoPercent: number;
  GetPercent: number;
  SelfPerformHours: number;
  FeeCIPercent: number;
  LaborDifferential: number;
  ROW_VERSION: string;
  Available: boolean;
}
