/**
 * @example Read all Company Types
 * ```
 * client.get<CompanyType[]>('/companies/companytypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyTypeID); });
 *      }
 * });
 * ```
 * @example Read a Company's Types
 * ```
 * client.get<CompanyType[]>('/companies/12345/companytypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyTypeID); });
 *      }
 * });
 * ```
 * @example Add Types to a Company
 * ```
 * // payload is an array of CompanyType elements to be added
 * client.post<CompanyType[]>('/companies/12345/companytypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.CompanyTypeID); });
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
