/**
 * @example Read all Leads
 * ```
 * client.get<Lead[]>('/leads').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LeadId); });
 *      }
 * });
 * ```
 * @example Read a Lead
 * ```
 * client.get<Lead>('/leads/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.result.LeadId);
 *      }
 * });
 * ```
 * @example Add new Lead(s)
 * ```
 * // payload is an array of Lead elements to be added
 * client.post<Lead[]>('/leads', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LeadId) });
 *      }
 * });
 * ```
 * @example Update a Lead
 * ```
 * // payload is a Lead element containing new and existing values
 * client.put<Lead>('/leads/12345', payload).then(res => {
 *      if (res.success) {
 *          console.log(res.result.LeadId);
 *      }
 * });
 * ```
 * @example Delete a Lead
 * ```
 * client.delete<Lead>('/leads/12345').then(res => {
 *      if (res.success) {
 *          console.log(res.status);
 *      }
 * });
 * ```
 * @example Search Lead(s) with pagination
 * ```
 * let searchQuery = 'Name:Victory';
 * client.search<Lead[]>('/leads', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LeadId) });
 *      }
 * }
 * ```
 * @example Search Lead/s without pagination
 * ```
 * let searchQuery = 'Name:Victory';
 * client.searchForAll<Lead>('/leads', searchQuery).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.LeadId) });
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
