/**
 * @example Read all Companies
 * ```
 * client.get<Company[]>('/companies').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyId); });
 *      }
 * });
 * ```
 * @example Read a Company
 * ```
 * client.get<Company>('/companies/12345').then(res => {
 *      if (res.success) {res
 *          console.log(res.result.CompanyId);
 *      }
 * });
 * ```
 * @example Add new Company(s)
 * ```
 * // payload is an array of Company elements to be added
 * client.post<Company[]>('/companies', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyId) });
 *      }
 * });
 * ```
 * @example Update a Company
 * ```
 * // payload is a Company element containing new and existing values
 * client.put<Company>('/companies/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.CompanyId);
 *      }
 * });
 * ```
 * @example Delete a Company
 * ```
 * client.delete<Company>('/companies/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search Company(s) with pagination
 * ```
 * let searchQuery = 'Name:Cosential';
 * client.search<Company[]>('/companies', searchQuery).then(res => {
 *      if (res.success) {
  *          res.result.forEach(nextRes => { console.log(nextRes.CompanyId) });
 *      }
 * });
 * ```
 * @example Search Company(s) without pagination
 * ```
 * let searchQuery = 'Name:Cosential';
 * client.searchForAll<Company>('/companies', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyId) });
 *      }
 * });
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
