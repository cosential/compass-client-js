/**
 * Represents the Territories.
 * @example Read all territories
 * ```
 * client.get<Territory[]>('/contacts/Territories').then( (res) => {
 *      if (res.success) { //returns an array of studio elements
 *          res.result.forEach( (index) => { console.log(index.TerritoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's territory
 * ```
 * client.get<Territory[]>('/contacts/5555999/Territories').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.TerritoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add territories to a contact's territories
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Territory[]>('/contacts/5555999/Territories', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.TerritoryID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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