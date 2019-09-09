/**
 * Represents the service types.
 * @example Read all Opportunity ServiceTypes
 * ```
 * client.get<ServiceType[]>('/opportunities/servicetypes').then( (res) => {
 *      if (res.success) { //returns an array of opportunity service types elements
 *          res.result.forEach( (index) => { console.log(index.ServiceTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's service types.
 * ```
 * client.get<ServiceType[]>('/opportunities/2178463/servicetypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ServiceTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add secondary category to a opportunity
 * ```
 * // payload is an array of service types elements to be added
 * client.post<ServiceType[]>('/opportunities/2178463/servicetypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.ServiceTypeId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
