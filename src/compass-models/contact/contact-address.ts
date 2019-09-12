/**
 * @example Read all addresses associated to a Contact
 * ```
 * contactClient.get<ContactAddress[]>('/contacts/12345/addresses').then(res => {
 *      if (res.success) { //success
 *          res.result.forEach(nextRes => { console.log(nextRes.AddressID); });
 *      }
 * });
 * ```
 * @example Read office address of a Contact
 * ```
 * contactClient.getContactAddress(12345, 'office').then(res => {
 *      if (res.success) {
 *          console.log(res.result.AddressID);
 *      }
 * });
 * ```
 */
export interface ContactAddress {
  AddressID: number;
  ContactId: number;
  AddressType: string;
  DefaultInd: boolean;
  CreateDate: string;
  Address1: string;
  Address2: string;
  Address3: string;
  City: string;
  PostalCode: string;
  State: string;
  Country: string;
  Comments: string;
  DeleteRecord: boolean;
  Phone: string;
  Fax: string;
  Cell: string;
  Pager: string;
  Other: string;
  County: string;
  Phone_NumbersOnly: string;
  Cell_NumbersOnly: string;
  Other_NumbersOnly: string;
  version_device: string;
  version_userName: string;
  PhoneExt: string;
  ROW_VERSION: string;
  AddrLat: number;
  AddrLong: number;
}
