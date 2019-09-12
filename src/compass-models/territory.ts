/**
 * @example Read all Contact Territories
 * ```
 * client.get<Territory[]>('/contacts/Territories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 * @example Read a Contact's Territories
 * ```
 * client.get<Territory[]>('/contacts/12345/Territories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 * @example Add Territories to a Contact
 * ```
 * // payload is an array of Territory elements to be added
 * client.post<Territory[]>('/contacts/12345/Territories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 * @example Read all Company Territories
 * ```
 * client.get<Territory[]>('/companies/Territories').then(res => {
 *      if (res.success) { //returns an array of territory elements
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 * @example Read a Company's Territories
 * ```
 * client.get<Territory[]>('/companies/12345/Territories').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 * @example Add Territories to a Company
 * ```
 * // payload is an array of Territory elements to be added
 * client.post<Territory[]>('/companies/12345/Territories', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.TerritoryID); });
 *      }
 * });
 * ```
 */
export interface Territory {
  TerritoryID: number;
  TerritoryName: string;
  zipCodes: string;
  createDate: Date;
  deleterecord: boolean;
  states: string;
  FIPSCodes: string;
  ROW_VERSION: string;
  available: boolean;
}
