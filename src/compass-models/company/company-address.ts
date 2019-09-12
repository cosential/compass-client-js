/**
 * @example Read all addresses associated to a Company
 * ```
 * companyClient.get<CompanyAddress[]>('/companies/12345/addresses').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.AddressID); });
 *      }
 * });
 * ```
 * @example Read default address of a Company
 * ```
 * companyClient.getCompanyAddress<CompanyAddress>(12345).then(res => {
 *      if (res.success) {
 *          console.log(res.result.AddressID);
 *      }
 * });
 * ```
 */
export interface CompanyAddress {
  AddressID: number;
  CompanyId: number;
  AddressTypeName: string;
  defaultInd: boolean;
  createdate: string;
  Address1: string;
  Address2: string;
  Address3: string;
  City: string;
  PostalCode: string;
  StateAbrv: string;
  CountryName: string;
  Comments: string;
  deleterecord: boolean;
  OfficePhone: string;
  OfficeFax: string;
  isAddressVerified: boolean;
  AddrVerifiedDateTime: string;
  AddrVerifiedMethod: string;
  AddrLat: number;
  AddrLong: number;
  County: string;
  CongressDistrict: string;
  CarrierRoute: string;
  OfficeSecPhone: string;
  version_userName: string;
  version_device: string;
  ROW_VERSION: string;
}
