/**
 * @example Read all Contacts
 * ```
 * client.get<Contact[]>('/contacts').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactId); });
 *      }
 * });
 * ```
 * @example Read a Contact
 * ```
 * client.get<Contact>('/contacts/12345').then(res => {
 *      if (res.success)
 *          console.log(res.result.ContactId);
 *      }
 * });
 * ```
 * @example Add new Contact(s)
 * ```
 * // payload is an array of Contact elements to be added
 * client.post<Contact[]>('/contacts', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactId) });
 *      }
 * });
 * ```
 * @example Update a Contact
 * ```
 * // payload is a Contact element containing new and existing values
 * client.put<Contact>('/contacts/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.ContactId);
 *      }
 * });
 * ```
 * @example Delete a Contact
 * ```
 * client.delete<Contact>('/contacts/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result);
 *      }
 * });
 * ```
 * @example Search Contact(s) with pagination
 * ```
 * let searchQuery = 'FirstName:John';
 * client.search<Contact[]>('/contacts', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactId) });
 *      }
 * }
 * ```
 * @example Search Contact/s without pagination
 * ```
 * let searchQuery = 'FirstName:John';
 * client.searchForAll<Contact>('/contacts', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ContactId) });
 *      }
 * }
 * ```
 */
export interface Contact {
  ContactId: number;
  CompanyId: number;
  CompanyName: string;
  Prefix: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  Suffix: string;
  Title: string;
  FormalName: string;
  NickName: string;
  Email: string;
  IsPrimaryContact: boolean;
  IsPrivate: number;
  IsActive: number;
  DeleteRecord: boolean;
  HomeEMailAddress: string;
  BusinessEmailAddress: string;
  AssistantName: string;
  AssistantTitle: string;
  AssistantPhone: string;
  AssistantEmail: string;
  Notes: string;
  Department: string;
  Birthday: string;
  SpouseName: string;
  SpouseBirthDay: string;
  ExternalId: string;
  ImportedRecord: number;
  SameAsCompanyInd: number;
  Webpage: string;
  customField1: string;
  customField2: string;
  customField3: string;
  customField4: string;
  IndividualShortText1: string;
  IndividualShortText2: string;
  IndividualShortText3: string;
  IndividualShortText4: string;
  IndividualShortText5: string;
  IndividualLongText1: string;
  IndividualLongText2: string;
  IndividualLongText3: string;
  IndividualLongText4: string;
  IndividualLongText5: string;
  IndividualNumber1: number;
  IndividualNumber2: number;
  IndividualDate1: string;
  IndividualDate2: string;
  IndividualValueListID1: number;
  IndividualValueListID2: number;
  IndividualMoney1: number;
  IndividualMoney2: number;
  IndividualValueListID3: number;
  importTypeID: number;
  MailingStatusID: number;
  twitterURL: string;
  linkedinURL: string;
  CreateDateTime: string;
  CreatedByUserId: number;
  LastModifiedDateTime: string;
  LastModifiedByUserId: number;
  LastDeletedDateTime: string;
  LastDeletedByUserId: number;
  version_device: string;
  version_userName: string;
  ProfileImageUrl: string;
  ROW_VERSION: string;
}
