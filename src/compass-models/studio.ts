/**
 * Represents the Studios.
 * @example Read all Contact studios
 * ```
 * client.get<Studio[]>('/contacts/studios').then( (res) => {
 *      if (res.success) { //returns an array of studio elements
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Contact's studios
 * ```
 * client.get<Studio[]>('/contacts/5555999/studios').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add studios to a contact's studios
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Studio[]>('/contacts/5555999/studios', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read all Company studios
 * ```
 * client.get<Studio[]>('/companies/studios').then( (res) => {
 *      if (res.success) { //returns an array of studio elements
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's studios
 * ```
 * client.get<Studio[]>('/companies/5555999/studios').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add studios to a Company's studios
 * ```
 * // payload is an array of Division elements to be added
 * client.post<Studio[]>('/companies/5555999/studios', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StudioId); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface Studio {
  StudioId: number;
  StudioName: string;
  StudioAcronym: string;
  StudioAddress1: string;
  StudioAddress2: string;
  StudioCity: string;
  StudioStateID: number;
  StudioZip: string;
  StudioCountryID: number;
  StudioPhone: string;
  StudioFax: string;
  StudioEmail: string;
  StudioUrl: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_studioid: string;
  StudioSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  AssociatedServices: string;
  ROW_VERSION: string;
}
