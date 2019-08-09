/**
 * Represents the Company type.
 * @example Read all Company types
 * ```
 * client.get<CompanyType[]>('/companies/companytypes').then( (res) => {
 *      if (res.success) { //returns an array of contact type elements
 *          res.result.forEach( (index) => { console.log(index.CompanyTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Company's types
 * ```
 * client.get<CompanyType[]>('/companies/5555999/companytypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.CompanyTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add types to a Company
 * ```
 * // payload is an array of CompanyType elements to be added
 * client.post<CompanyType[]>('/companies/5555999/companytypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.CompanyTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface CompanyType {
  CompanyTypeID: number;
  CompanyTypeName: string;
  Description: string;
  AssociationID: number,
  AvailableType: number;
  CompanyTypeOrder: number;
  DeleteRecord: boolean;
  CreateDate: Date;
  Old_ID: string;
}
