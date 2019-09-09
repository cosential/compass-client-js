/**
 * Represents the Office Divisions.
 * @example Read all Opportunity Office Divisions
 * ```
 * client.get<OfficeDivision[]>('/opportunities/officedivision').then( (res) => {
 *      if (res.success) { //returns an array of opportunity office division elements
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's OfficeDivision
 * ```
 * client.get<OfficeDivision[]>('/opportunities/2178463/officedivision').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add office division to a opportunity
 * ```
 * // payload is an array of OfficeDivision elements to be added
 * client.post<OfficeDivision[]>('/opportunities/2178463/officedivision', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.OffDivID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
