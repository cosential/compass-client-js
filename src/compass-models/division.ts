/**
 * Represents the Divisions.
 * @example Read all Contact Divisions
 * ```
 * client.get<Division[]>('/contacts/divisions').then( (res) => {
 *      if (res.success) { //returns an array of division elements
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's divisions
 * ```
 * client.get<Division[]>('/contacts/5555999/divisions').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add divisions to a contact's divisions
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Division[]>('/contacts/5555999/divisions', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read all Company Divisions
 * ```
 * client.get<Division[]>('/companies/divisions').then( (res) => {
 *      if (res.success) { //returns an array of division elements
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's divisions
 * ```
 * client.get<Division[]>('/companies/5555999/divisions').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add divisions to a Company's divisions
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Division[]>('/companies/5555999/divisions', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DivisionID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
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
