/**
 * @example Read all Lead RecordSources
 * ```
 * client.get<LeadRecordSource[]>('/leads/recordsource').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's Record Sources
 * ```
 * client.get<LeadRecordSource[]>('/leads/12345/recordsource').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add Record Sources to a Lead
 * ```
 * // payload is an array of LeadRecordSource elements to be added
 * client.post<LeadRecordSource[]>('/leads/12345/recordsource', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadRecordSource {
  Id: number;
  Name: string;
  IsDeleted: boolean;
  IsAvailable: boolean;
  IsDefault: boolean;
}
