/**
 * Represents the Call Log.
 * @example Read all Call Logs
 * ```
 * client.get<CallLog[]>('/calllogs').then( (res) => {
 *      if (res.success) { //returns an array of call log elements
 *          res.result.forEach( (index) => { console.log(index.id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Call Log
 * ```
 * client.get<CallLog>('/calllogs/5555999').then( (res) => {
 *      if (res.success) { //returns a single element
 *          console.log(res.result.CallType + ' ' + res.result.subject);
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add new Call Log/s
 * ```
 * //payload is an array of Call Log elements to be added
 * client.post<CallLog[]>('/calllogs', payload).then( (res) => {
 *      if(res.success){ //returns an array of newly added elements
 *          res.result.forEach( (index) => { console.log("Added Call Log with id as " + index.id) + "." } );
 *      } else { //something went wrong
 *          console.log("Call Log creation failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Update a Call Log
 * ```
 * //payload is a Call Log element containing new and existing values
 * //note that the API client does not support under posting of data
 * client.put<CallLog>('/calllogs/5555999', payload).then( (res) => {
 *      if(res.success){ //returns the updated element
 *          console.log("Updated call log with Id as: " + res.result.id);
 *      } else { //something went wrong
 *          console.log("Call Log update failed. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Delete a Call Log
 * ```
 * client.delete<CallLog>('/calllogs/5555999').then( (res) => {
 *      if(res.success){ //element marked as inactive
 *          console.log(res.result);
 *      } else { //something went wrong
 *          console.log("Delete unsuccessful. Error message: " + res.message);
 *      }
 * });
 * ```
 * @example Search Call Log/s
 * ```
 * let searchQuery = 'subject:Any Random Subject';
 * client.search<CallLog[]>('/calllogs', searchQuery).then( (res) => {
 *      if(res.success){ //search successful
 *          console.log("Your search returned " + res.result.length + " result/s.");
 *      } else { //something went wrong
 *          console.log("Search failed. Error Message: " + res.message)
 *      }
 * }
 * ```
 */
export interface CallLog {
  id: number;
  startDate: string;
  endDate: string;
  CallType: string;
  subject: string;
  comments: string;
  isFollowup: boolean;
  CallDisposition: string;
  status: string;
  deleteRecord: boolean;
  CreatedBy: string;
  CreatedByUserId: number;
  CreateDateTime: string;
}
