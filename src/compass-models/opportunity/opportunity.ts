/**
 * @example Read all Opportunities
 * ```
 * client.get<Opportunity[]>('/opportunities').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OpportunityId); });
 *      }
 * });
 * ```
 * @example Read an Opportunity
 * ```
 * client.get<Opportunity>('/opportunities/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.OpportunityId);
 *      }
 * });
 * ```
 * @example Add new Opportunity(s)
 * ```
 * // payload is an array of Opportunity elements to be added
 * client.post<Opportunity[]>('/opportunities', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OpportunityId) });
 *      }
 * });
 * ```
 * @example Update an Opportunity
 * ```
 * // payload is an Opportunity element containing new and existing values
 * client.put<Opportunity>('/opportunities/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.OpportunityId);
 *      }
 * });
 * ```
 * @example Delete an Opportunity
 * ```
 * client.delete<Opportunity>('/opportunities/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search Opportunity(s) with pagination
 * ```
 * let searchQuery = 'OpportunityName:Sample';
 * client.search<Opportunity[]>('/opportunities', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OpportunityId) });
 *      }
 * });
 * ```
 * @example Search Opportunity(s) without pagination
 * ```
 * let searchQuery = 'OpportunityName:Sample';
 * client.searchForAll<Opportunity>('/opportunities', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OpportunityId) });
 *      }
 * });
 * ```
 */
export interface Opportunity {
  OpportunityId: number;
  ClientId: number;
  ClientName: string;
  SF255Form: number;
  SF330Form: number;
  OpportunityName: string;
  EstimatedSelectionDate: string;
  CloseDate: string;
  Cost: number;
  Size: number;
  SizeUnit: string;
  Fee: number;
  Probability: number;
  NextAction: string;
  RFPRecieved: boolean;
  ProposalNumber: string;
  ProposalDueDate: string;
  ExpectedRFPDate: string;
  QualsDueDate: string;
  ProposalSubmitted: boolean;
  PresentationDate: string;
  Comments: string;
  MarketingCostBudget: number;
  MarketingCostActual: number;
  OpportunityNumber: string;
  ActiveInd: number;
  DeleteRecord: boolean;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  PostalCode: string;
  Country: string;
  OpportunityDescription: string;
  ExternalId: string;
  OpportunityShortText1: string;
  OpportunityShortText2: string;
  OpportunityShortText3: string;
  OpportunityShortText4: string;
  OpportunityShortText5: string;
  OpportunityNumber1: number;
  OpportunityNumber2: number;
  OpportunityNumber3: number;
  OpportunityNumber4: number;
  OpportunityNumber5: number;
  OpportunityDate1: string;
  OpportunityDate2: string;
  OpportunityDate3: string;
  OpportunityDate4: string;
  OpportunityDate5: string;
  OpportunityValueListID1: number;
  OpportunityValueListID2: number;
  OpportunityValueListID3: number;
  OpportunityValueListID4: number;
  OpportunityValueListID5: number;
  OpportunityMoney1: number;
  OpportunityMoney2: number;
  OpportunityMoney3: number;
  OpportunityMoney4: number;
  OpportunityMoney5: number;
  OpportunityPercent1: number;
  OpportunityPercent2: number;
  OpportunityPercent3: number;
  OpportunityPercent4: number;
  OpportunityPercent5: number;
  EstimatedStartDate: string;
  EstimatedCompletionDate: string;
  FirmFee: number;
  ProjectProbability: number;
  OwnerId: number;
  OwnerName: string;
  TeamOppFirmOrgFeeSource: number;
  OppType: number;
  PreConStartDate: string;
  PreConEndDate: string;
  DesignStartDate: string;
  DesignCompletionDate: string;
  ConstructionStartDate: string;
  ConstructionCompletionDate: string;
  fundProbability: number;
  ROW_VERSION: string;
  ShortListed: boolean;
  Interviewed: boolean;
  ShortListedDate: string;
  Score: number;
  CreateDateTime: string;
  CreatedByUserId: number;
  LastModifiedDateTime: string;
  LastModifiedByUserId: number;
  LastDeletedDateTime: string;
  LastDeletedByUserId: number;
  EstimatedFeePercentage: number;
  FactoredFee: number;
  GrossRevenueSTD: number;
  GrossMarginDollarsSTD: number;
  GrossMarginPercentSTD: number;
  FactoredCostSTD: number;
  FeeCIPercent: number;
  FeeCIDifVolume: number;
  LaborDifferentialDollars: number;
  OppSelfPerformHours: number;
  EstimatedManagementUnits: number;
  GrossMargin: number;
  GrossMarginPercent: number;
  MasterOpportunityId: number;
  OppTypeDescription: string;
  AutoNumber: number;
  Stage: string;
  StageType: string;
  Note: string;
  RedZoneScore: number;
  OpportunityLongText1: string;
  OpportunityLongText2: string;
  OpportunityLongText3: string;
  OpportunityLongText4: string;
  OpportunityLongText5: string;
  approvalLevel: string;
  approvalStatus: string;
  OppLat: number;
  OppLong: number;
}
