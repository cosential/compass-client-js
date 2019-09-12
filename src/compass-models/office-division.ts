/**
 * @example Read all Opportunity OfficeDivisions
 * ```
 * client.get<OfficeDivision[]>('/opportunities/officedivision').then(res => {
 *      if (res.success) { //returns an array of opportunity office division elements
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 * @example Read an Opportunity's OfficeDivisions
 * ```
 * client.get<OfficeDivision[]>('/opportunities/12345/officedivision').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 * @example Add OfficeDivisions to an Opportunity
 * ```
 * // payload is an array of OfficeDivision elements to be added
 * client.post<OfficeDivision[]>('/opportunities/12345/officedivision', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 * @example Read all Lead OfficeDivisions
 * ```
 * client.get<OfficeDivision[]>('/leads/officedivisions').then(res => {
 *      if (res.success) { //returns an array of opportunity office division elements
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 * @example Read a Lead's OfficeDivisions
 * ```
 * client.get<OfficeDivision[]>('/leads/12345/officedivisions').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 * @example Add OfficeDivisions to a Lead
 * ```
 * // payload is an array of OfficeDivision elements to be added
 * client.post<OfficeDivision[]>('/leads/12345/officedivisions', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.OffDivID); });
 *      }
 * });
 * ```
 */
export interface OfficeDivision {
  OffDivID: number;
  OffDivDesc: string;
  ROW_VERSION: string;
  DeleteInd: boolean;
  UpdatedDateTime: Date;
}
