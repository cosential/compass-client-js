/**
 * Represents the Company Address.
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
