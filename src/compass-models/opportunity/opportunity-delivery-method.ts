/**
 * Represents the Opportunity Delivery Method.
 * @example Read all Opportunity Delivery Methods
 * ```
 * client.get<OpportunityDeliveryMethod[]>('/opportunities/clienttypes').then( (res) => {
 *      if (res.success) { //returns an array of opportunity delivery methods elements
 *          res.result.forEach( (index) => { console.log(index.DeliveryMethodID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's delivery methods
 * ```
 * client.get<OpportunityDeliveryMethod[]>('/opportunities/2178463/deliverymethod').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DeliveryMethodID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add delivery method to a opportunity
 * ```
 * // payload is an array of OpportunityDeliveryMethod elements to be added
 * client.post<OpportunityDeliveryMethod[]>('/opportunities/2178463/deliverymethod', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.DeliveryMethodID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
