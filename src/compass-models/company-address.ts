/**
 * Represents the Company Address.
 * @example Read all addresses associated to a Company
 * ```
 * companyClient.get<CompanyAddress[]>('/companies/5556666/addresses').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.AddressID); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read default address of a Company
 * ```
 * companyClient.getCompanyAddress<CompanyAddress>(5556666).then( (res) => {
 *      if(res.success){ //success
 *          console.log(res.result.Address1);
 *      } else { //something went wrong
 *          console.log(res.message);
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
