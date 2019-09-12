/**
 * @example Read all CallLogs
 * ```
 * client.get<CallLog[]>('/calllogs').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id); });
 *      }
 * });
 * ```
 * @example Read a CallLog
 * ```
 * client.get<CallLog>('/calllogs/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.id);
 *      }
 * });
 * ```
 * @example Add new CallLog(s)
 * ```
 * // payload is an array of CallLog elements to be added
 * client.post<CallLog[]>('/calllogs', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id) });
 *      }
 * });
 * ```
 * @example Update a CallLog
 * ```
 * // payload is a Call Log element containing new and existing values
 * client.put<CallLog>('/calllogs/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.id);
 *      }
 * });
 * ```
 * @example Delete a CallLog
 * ```
 * client.delete<CallLog>('/calllogs/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search CallLog(s) with pagination
 * ```
 * let searchQuery = 'subject:Example';
 * client.search<CallLog[]>('/calllogs', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id) });
 *      }
 * }
 * ```
 * @example Search Call Log/s without pagination
 * ```
 * let searchQuery = 'subject:Example';
 * client.searchForAll<CallLog>('/calllogs', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.id) });
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
