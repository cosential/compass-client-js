/**
 * @example Read all Opportunity ServiceTypes
 * ```
 * client.get<ServiceType[]>('/opportunities/servicetypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 * @example Read an Opportunity's ServiceTypes
 * ```
 * client.get<ServiceType[]>('/opportunities/12345/servicetypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 * @example Add ServiceTypes to an Opportunity
 * ```
 * // payload is an array of ServiceTypes elements to be added
 * client.post<ServiceType[]>('/opportunities/12345/servicetypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 * @example Read all Lead ServiceTypes
 * ```
 * client.get<ServiceType[]>('/leads/servicetypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 * @example Read a Lead's ServiceTypes
 * ```
 * client.get<ServiceType[]>('/leads/12345/servicetypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 * @example Add ServiceTypes to a Lead
 * ```
 * // payload is an array of ServiceTypes elements to be added
 * client.post<ServiceType[]>('/leads/12345/servicetypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.ServiceTypeId); });
 *      }
 * });
 * ```
 */
export interface ServiceType {
  ServiceTypeId: number;
  ServiceTypeName: string;
  IsDeleted: boolean;
  IsDefault: boolean;
  IsViewable: boolean;
}
