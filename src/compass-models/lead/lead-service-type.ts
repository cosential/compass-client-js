/**
 * Represents the Lead ServiceType.
 * @example Read all Leads ServiceTypes
 * ```
 * client.get<LeadServiceType[]>('/leads/servicetypes').then( (res) => {
 *      if (res.success) { //returns an array of lead ServiceType elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead ServiceTypes
 * ```
 * client.get<LeadServiceType[]>('/leads/5555999/servicetypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add ServiceTypes to a lead
 * ```
 * // payload is an array of LeadServiceType elements to be added
 * client.post<LeadServiceType[]>('/leads/5555999/servicetypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface LeadServiceType {
  ServiceTypeId: number;
  ServiceTypeName: string;
  IsDeleted: boolean;
  IsDefault: boolean;
  IsViewable: boolean;
}
