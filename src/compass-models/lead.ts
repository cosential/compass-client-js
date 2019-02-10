/**
 * Represents the Lead.
 * @example Read all Leads
 * ```
 * client.get<Lead[]>('/leads').then( (res) => {
 *      if (res.success) { //returns an array of lead elements
 *          res.result.forEach( (index) => { console.log(index.LeadId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead
 * ```
 * client.get<Lead>('/leads/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.Name + ' ' + res.result.Description);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Lead/s
 * ```
 * //payload is an array of Lead elements to be added
 * client.post<Lead[]>('/leads', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Lead with id as " + index.LeadId) + "." } );
 *      } else { //something went wrong
 *          console.log("Lead creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Lead
 * ```
 * //payload is a Lead element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<Lead>('/leads/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated lead with Id as: " + res.result.LeadId);
 *      } else { //something went wrong
 *          console.log("Lead update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Lead
 * ```
 * client.delete<Lead>('/leads/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Lead/s
 * ```
 * let searchQuery = 'Name:Victory';
 * client.search<Lead[]>('/leads', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface Lead {  
  LeadId: number;
  Name: string;
  Description: string;
  NextAction: string;
  Date: string;
  TickDate: string;
  CreateDate: string;
  IsDeleted: boolean;
  Email: string;
  Phone: string;
  ContactFirst: string;
  ContactLast: string;
  NumOfViews: number;
  EstimatedCost: number;
  State: string;
  City: string;
  Country: string;
  BidDate: string;
  LegacyId: string;
  ModifyDate: string;
  Deliverable: string;
  Notes: string;
  ROW_VERSION: string;
  CreatedByUserId: number;
}
