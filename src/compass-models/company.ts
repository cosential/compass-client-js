/**
 * Represents the Company.
 * @example Read all Companies
 * ```
 * client.get<Company[]>('/companies').then( (res) => {
 *      if (res.success) { //returns an array of company elements
 *          res.result.forEach( (index) => { console.log(index.CompanyId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company
 * ```
 * client.get<Company>('/companies/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.Name);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Company/s
 * ```
 * //payload is an array of Company elements to be added
 * client.post<Company[]>('/companies', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Company with id as " + index.CompanyId) + "." } );
 *      } else { //something went wrong
 *          console.log("Company creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Company
 * ```
 * //payload is a Company element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Company>('/companies/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated company with Id as: " + res.result.CompanyId);
 *      } else { //something went wrong
 *          console.log("Company update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Company
 * ```
 * client.delete<Company>('/companies/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Company/s
 * ```
 * let searchQuery = 'Name:Cosential';
 * client.search<Company[]>('/companies', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface Company {
  CompanyId: number;
  Name: string;
  Acronym: string;
  Website: string;
  ExternalId: string;
  FPISImportId: string;
  ParentCompanyName: string;
  TickerSymbol: string;
  SalesTarget: number;
  AnnualRevenue: number;
  NumberOfEmployees: number;
  IsHeadquarters: boolean;
  ContactFirmsShortText1: string;
  ContactFirmsShortText2: string;
  ContactFirmsShortText3: string;
  ContactFirmsShortText4: string;
  ContactFirmsShortText5: string;
  ContactFirmsLongText1: string;
  ContactFirmsLongText2: string;
  ContactFirmsLongText3: string;
  ContactFirmsLongText4: string;
  ContactFirmsLongText5: string;
  ContactFirmsNumber1: number;
  ContactFirmsNumber2: number;
  ContactFirmsNumber3: number;
  ContactFirmsNumber4: number;
  ContactFirmsNumber5: number;
  ContactFirmsDate1: string;
  ContactFirmsDate2: string;
  ContactFirmsDate3: string;
  ContactFirmsDate4: string;
  ContactFirmsDate5: string;
  ContactFirmsMoney1: number;
  ContactFirmsMoney2: number;
  ContactFirmsMoney3: number;
  ContactFirmsMoney4: number;
  ContactFirmsMoney5: number;
  ContactFirmsPercent1: number;
  ContactFirmsPercent2: number;
  ContactFirmsPercent3: number;
  ContactFirmsPercent4: number;
  ContactFirmsPercent5: number;
  DUNSNumber: string;
  OtherCompanyName: string;
  Division: string;
  IsDeleted: boolean;
  Notes: string;
  CreateDateTime: string;
  CreatedByUserId: number;
  LastModifiedDateTime: string;
  LastModifiedByUserId: number;
  LastDeletedDateTime: string;
  LastDeletedByUserId: number;
  ParentCompanyId: number;
  Services: string;
  Sector: string;
  ROW_VERSION: string;
  version_userName: string;
  version_device: string;
}
