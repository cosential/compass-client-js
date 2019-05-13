/**
 * Represents the Personnel.
 * @example Read all Personnel
 * ```
 * client.get<Personnel[]>('/personnel').then( (res) => {
 *      if (res.success) { //returns an array of personnel elements
 *          res.result.forEach( (index) => { console.log(index.PersonnelId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Personnel
 * ```
 * client.get<Personnel>('/personnel/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.LastName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Personnel
 * ```
 * //payload is an array of Personnel elements to be added
 * client.post<Personnel[]>('/personnel', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Personnel with id as " + index.PersonnelId) + "." } );
 *      } else { //something went wrong
 *          console.log("Personnel creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Personnel
 * ```
 * //payload is a Personnel element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Personnel>('/personnel/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated personnel with Id as: " + res.result.PersonnelId);
 *      } else { //something went wrong
 *          console.log("Personnel update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Personnel
 * ```
 * client.delete<Personnel>('/personnel/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Personnel with pagination
 * ```
 * let searchQuery = 'OfficeEmail:jdoe@cosential.com AND FirstName:John';
 * client.search<Personnel[]>('/personnel', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 * @example Search Personnel without pagination
 * ```
 * let searchQuery = 'Title:Architect';
 * client.searchForAll<Personnel>('/personnel', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface Personnel {
  PersonnelId: number;
  FirstName: string;
  MI: string;
  LastName: string;
  Title: string;
  ProfDesc1: string;
  ProfDesc2: string;
  FormalName: string;
  HomeAddress1: string;
  HomeAddress2: string;
  HomeCity: string;
  HomeState: string;
  HomeCountry: string;
  HomeZip: string;
  HomeFax: string;
  OfficeCellPhone: string;
  PersonalCellPhone: string;
  HomeEmail: string;
  HomePhone: string;
  ExternalId: string;
  Status: string;
  TechStaff: boolean;
  OtherCat: string;
  OfficePhone: string;
  OfficePhoneExtension: string;
  OfficeFax: string;
  CellPhone: string;
  Partner: string;
  Nationality: string;
  OfficeEmail: string;
  DeleteInd: boolean;
  Acronym: string;
  Prefix: string;
  OfficePager: string;
  Suffix: string;
  NickName: string;
  SF330_OfficeID: number;
  EEOCID: number;
  Gender: string;
  Race: number;
  AffirmativeActionID: number;
  Ethnicity: number;
  MaritalStatus: number;
  MilitaryStatus: number;
  VisaStatus: number;
  Visa_ExpDate: string;
  Notes: string;
  bio: string;
  HRStatusID: number;
  GovernmentClearances: string;
  SummaryNotes: string;
  StartDate: string;
  EndDate: string;
  BirthDate: string;
  Year: number;
  PreviousStartDate: string;
  PreviousSeparationDate: string;
  LastPromotionDate: string;
  AdditionalTimeWithFirm: number;
  YearsWithOtherFirms: number;
  CreateDate: string;
  LastModifiedDate: string;
  LastDeletedDate: string;
  Discipline_330CodeId: number;
  SupervisorId: number;
  EmergencyContact1Name: string;
  EmergencyContact1Phone: string;
  EmergencyContact1Relationship: string;
  EmergencyContact1CellPhone: string;
  EmergencyContact1Address1: string;
  EmergencyContact1Address2: string;
  EmergencyContact1City: string;
  EmergencyContact1State: string;
  EmergencyContact1Country: string;
  EmergencyContact1Zip: string;
  EmergencyContact2Name: string;
  EmergencyContact2Phone: string;
  EmergencyContact2Relationship: string;
  EmergencyContact2CellPhone: string;
  EmergencyContact2Address1: string;
  EmergencyContact2Address2: string;
  EmergencyContact2City: string;
  EmergencyContact2State: string;
  EmergencyContact2Country: string;
  EmergencyContact2Zip: string;
  Level: string;
  DeskOfficeLocation: string;
  SF254Code: number;
  Confidential: boolean;
  ProfileImageUrl: string;
  ROW_VERSION: string;
}
