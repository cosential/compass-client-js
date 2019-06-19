/**
 * Represents the Divisions.
 * @example Read all Divisions
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