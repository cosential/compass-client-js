/**
 * @example Read all Projects
 * ```
 * client.get<Project[]>('/projects').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProjectId); });
 *      }
 * });
 * ```
 * @example Read a Project
 * ```
 * client.get<Project>('/projects/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.ProjectId);
 *      }
 * });
 * ```
 * @example Add new Project(s)
 * ```
 * // payload is an array of Project elements to be added
 * client.post<Project[]>('/projects', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ProjectId) });
 *      }
 * });
 * ```
 * @example Update a Project
 * ```
 * // payload is a Project element containing new and existing values
 * client.put<Project>('/projects/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.ProjectId);
 *      }
 * });
 * ```
 * @example Delete a Project
 * ```
 * client.delete<Project>('/projects/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search Project(s) with pagination
 * ```
 * let searchQuery = 'ProjectName:Sample';
 * client.search<Project[]>('/projects', searchQuery).then(res => {
 *      if (res.success) { //search successful
 *          res.result.forEach(nextRes => { console.log(nextRes.ProjectId) });
 *      }
 * }
 * ```
 * @example Search Project(s) without pagination
 * ```
 * let searchQuery = 'ProjectName:Sample';
 * client.searchForAll<Project>('/projects', searchQuery).then(res => {
 *      if (res.success) { //search successful
 *          res.result.forEach(nextRes => { console.log(nextRes.ProjectId) });
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
