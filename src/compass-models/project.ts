/**
 * Represents the Project.
 * @example Read all Projects
 * ```
 * client.get<Project[]>('/projects').then( (res) => {
 *      if (res.success) { //returns an array of project elements
 *          res.result.forEach( (index) => { console.log(index.ProjectId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Project
 * ```
 * client.get<Project>('/projects/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.LastName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Project/s
 * ```
 * //payload is an array of Project elements to be added
 * client.post<Project[]>('/projects', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Project with id as " + index.ProjectId) + "." } );
 *      } else { //something went wrong
 *          console.log("Project creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Project
 * ```
 * //payload is a Project element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Project>('/projects/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated project with Id as: " + res.result.ProjectId);
 *      } else { //something went wrong
 *          console.log("Project update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Project
 * ```
 * client.delete<Project>('/projects/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Project/s
 * ```
 * let searchQuery = 'ProjectName:Sample Construction';
 * client.search<Project[]>('/projects', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface Project {
  ProjectId: number;
  ProjectName: string;
  OtherProjectName: string;
  ProjectNumber: string;
  ProjAddress: string;
  ProjCity: string;
  ProjState: string;
  ProjZip: string;
  ProjCounty: string;
  ProjCountry: string;
  MetroArea: string;
  CompletionDate: string;
  FederalWork: string;
  Preferred: boolean;
  Prominent: boolean;
  DescriptionBrief: string;
  Comments: string;
  ProposalNumber: string;
  SitePhoneNumber: string;
  WorkCompletionDate: string;
  PercentComplete: number;
  ProjectAuthorization: string;
  ClientComments: string;
  OwnerComments: string;
  AccountExecutiveComments: string;
  CostConfidential: boolean;
  Phase: string;
  AwardedDate: string;
  ContractSignedDate: string;
  DesignStartDate: string;
  DesignCompleteDate: string;
  ConstructionStartDate: string;
  ActualCompletionDate: string;
  EstCompletionDate: string;
  EstConstructionStartDate: string;
  CertOfOccDate: string;
  AccountingClosedDate: string;
  ScheduleComments: string;
  BuildingSize: number;
  SizeType: string;
  NumFloors: number;
  NumRooms: number;
  NumBeds: number;
  NumUnits: number;
  SiteSize: string;
  NewSize: string;
  RenovationSize: number;
  AdditionSize: number;
  ParkingSpaces: number;
  ParkingSize: number;
  ProjectNameFor2545: string;
  ResponsibilityFor2545: string;
  CostDisplayType: string;
  Reference2558: string;
  ExperienceType2545: string;
  ProjAddress2: string;
  LogoFile: string;
  Enabled: boolean;
  SubCatsEnabled: boolean;
  ProjLocation: string;
  ConstructionCompletionDate: string;
  Subsidiary: string;
  DeleteRecord: number;
  SizeComments: string;
  Project_Approved: boolean;
  ProfileCodeId: string;
  Naics: string;
  Bonded: number;
  SelfPerform: string;
  Notes: string;
  OwnerType: string;
  FileStatus: string;
  ProjectSpeed: string;
  Procurement: string;
  ProjectsShortText1: string;
  ProjectsShortText2: string;
  ProjectsShortText3: string;
  ProjectsShortText4: string;
  ProjectsShortText5: string;
  ProjectsNumber1: number;
  ProjectsNumber2: number;
  ProjectsNumber3: number;
  ProjectsNumber4: number;
  ProjectsNumber5: number;
  ProjectsDate1: string;
  ProjectsDate2: string;
  ProjectsDate3: string;
  ProjectsDate4: string;
  ProjectsDate5: string;
  ProjectsLongText1: string;
  ProjectsLongText2: string;
  ProjectsLongText3: string;
  ProjectsLongText4: string;
  ProjectsLongText5: string;
  ProjectsValueListID1: number;
  ProjectsValueListID2: number;
  ProjectsValueListID3: number;
  ProjectsValueListID4: number;
  ProjectsValueListID5: number;
  ProjectsMoney1: number;
  ProjectsMoney2: number;
  ProjectsMoney3: number;
  ProjectsMoney4: number;
  ProjectsMoney5: number;
  Contract_Name: string;
  Accounting_ID: string;
  UsesExternalData: boolean;
  ArchiveStatus: string;
  FeeBasisFee: number;
  FeeBasisRate: number;
  FeeBasisUpset: number;
  ProjectLink: boolean;
  TotalContract: string;
  InternalLabor: number;
  FeesEarned: number;
  billingInformation: string;
  SiteFax: string;
  BillingAddress1: string;
  BillingAddress2: string;
  BillingCity: string;
  BillingState: string;
  BillingZip: string;
  BillingCountry: string;
  BillingCounty: string;
  BillingPhone: string;
  BillingFax: string;
  BillWithMainJob: string;
  projNumberRequested: string;
  ProjectsPercent1: number;
  ProjectsPercent2: number;
  ProjectsPercent3: number;
  ProjectsPercent4: number;
  ProjectsPercent5: number;
  CreatedDate: string;
  CreatedByUser: number;
  ModifiedDate: string;
  ModifiedUser: number;
  DeletedDate: string;
  DeletedByUser: number;
  ContractTypeID: string;
  ScheduleScheduleComments: string;
  ScheduleContingency: string;
  ScheduleFactor: string;
  ScheduleProfitGoal: string;
  ScheduleConstCompletionDate: string;
  ProjStatus: string;
  ProjectStatusID: number;
  PublishToWebsite: boolean;
  ROW_VERSION: string;
  OpportunityId: number;
  ProjectDisplayName: string;
  MasterID: number;
  isMarketingProject: boolean;
  isSubMarketingProject: boolean;
  ProjLat: number;
  ProjLong: number;
  IsPublishableProject: boolean;
}
