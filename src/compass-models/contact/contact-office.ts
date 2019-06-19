/**
 * Represents the Offices.
 * @example Read all offices
 * ```
 * client.get<ContactOffice[]>('/contacts/offices').then( (res) => {
 *      if (res.success) { //returns an array of office elements
 *          res.result.forEach( (index) => { console.log(index.OfficeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's offices
 * ```
 * client.get<ContactOffice[]>('/contacts/5555999/offices').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OfficeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add offices to a contact
 * ```
 * // payload is an array of Offices elements to be added
 * client.post<ContactOffice[]>('/contacts/5555999/offices', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OfficeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface ContactOffice {
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
