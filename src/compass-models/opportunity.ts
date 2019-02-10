/**
 * Represents the Opportunity.
 * @example Read all Opportunities
 * ```
 * client.get<Opportunity[]>('/opportunities').then( (res) => {
 *      if (res.success) { //returns an array of Opportunity elements
 *          res.result.forEach( (index) => { console.log(index.OpportunityId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read an Opportunity
 * ```
 * client.get<Opportunity>('/opportunities/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.OpportunityName + ' ' + res.result.OpportunityNumber);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Opportunity/s
 * ```
 * //payload is an array of Opportunity elements to be added
 * client.post<Opportunity[]>('/opportunities', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Opportunity with id as " + index.OpportunityId) + "." } );
 *      } else { //something went wrong
 *          console.log("Opportunity creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update an Opportunity
 * ```
 * //payload is an Opportunity element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Opportunity>('/opportunities/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated opportunity with Id as: " + res.result.OpportunityId);
 *      } else { //something went wrong
 *          console.log("Opportunity update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete an Opportunity
 * ```
 * client.delete<Opportunity>('/opportunities/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Opportunity/s
 * ```
 * let searchQuery = 'OpportunityName:Sample Opportunity';
 * client.search<Opportunity[]>('/opportunities', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
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
