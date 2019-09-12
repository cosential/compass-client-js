/**
 * @example Read all Opportunity DeliveryMethods
 * ```
 * client.get<OpportunityDeliveryMethod[]>('/opportunities/clienttypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DeliveryMethodID); });
 *      }
 * });
 * ```
 * @example Read a Opportunity's DeliveryMethods
 * ```
 * client.get<OpportunityDeliveryMethod[]>('/opportunities/12345/deliverymethod').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DeliveryMethodID); });
 *      }
 * });
 * ```
 * @example Add DeliveryMethod to a Opportunity
 * ```
 * // payload is an array of OpportunityDeliveryMethod elements to be added
 * client.post<OpportunityDeliveryMethod[]>('/opportunities/12345/deliverymethod', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.DeliveryMethodID); });
 *      }
 * });
 * ```
 */
export interface OpportunityDeliveryMethod {
  DeliveryMethodID: number;
  DeliveryMethodName: string;
  Description: string;
  AvailableType: number;
  DeliveryMethodOrder: number;
  DeleteRecord: number;
  CreateDate: Date;
  Old_ID: number;
}
