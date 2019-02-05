/**
 * Represents the Contact.
 * @example Read all Contacts
 * ```
 * client.get<Contact[]>('/contacts').then( (res) => {
 *      if (res.success) { //returns an array of contact elements
 *          res.result.forEach( (index) => { console.log(index.ContactId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 *
 * ```
 * @example Read a Contact
 * ```
 * client.get<Contact>('/contacts/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.FirstName + ' ' + res.result.LastName);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Contact/s
 * ```
 * //payload is an array of Contact elements to be added
 * client.post<Contact[]>('/contacts', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Contact with id as " + index.ContactId) + "." } );
 *      } else { //something went wrong
 *          console.log("Contact creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Contact
 * ```
 * //payload is a Contact element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Contact>('/contacts/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated contact with Id as: " + res.result.ContactId);
 *      } else { //something went wrong
 *          console.log("Contact update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Contact
 * ```
 * client.delete<Contact>('/contacts/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Contact/s
 * ```
 * let queryParams = { "BusinessEmailAddress": "jdoe@cosential.com", "FirstName": "John" };
 * client.search<Contact[]>('/contacts', queryParams).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
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
  ROW_VERSION: string;
}
