/**
 * Represents the Practice Areas.
 * @example Read all PracticeAreas
 * ```
 * client.get<ContactPracticeArea[]>('/contacts/PracticeAreas').then( (res) => {
 *      if (res.success) { //returns an array of division elements
 *          res.result.forEach( (index) => { console.log(index.PracticeAreaId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's PracticeAreas
 * ```
 * client.get<ContactPracticeArea[]>('/contacts/5555999/PracticeAreas').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.PracticeAreaId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add PracticeAreas to a contact's PracticeAreas
 * ```
 * // payload is an array of Division elements to be added
 * client.post<ContactPracticeArea[]>('/contacts/5555999/PracticeAreas', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.PracticeAreaId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactPracticeArea {
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