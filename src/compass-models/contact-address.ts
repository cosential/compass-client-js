/**
 * Represents the Contact Address.
 * @example Read all addresses associated to a Contact
 * ```
 * contactClient.get<ContactAddress[]>('/contacts/5556666/addresses').then( (res) => {
 *      if(res.success){ //success
 *          res.result.forEach((index) => { console.log(index.AddressID); });
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read office address of a Contact
 * ```
 * contactClient.getContactAddress<ContactAddress>(5556666, 1).then( (res) => {
 *      if(res.success){ //success
 *          console.log(res.result.Address1);
 *      } else { //something went wrong
 *          console.log(res.message);
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
