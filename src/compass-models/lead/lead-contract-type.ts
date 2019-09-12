/**
 * @example Read all Lead ContractTypes
 * ```
 * client.get<LeadContractType[]>('/leads/contracttypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Read a Lead's ContractTypes
 * ```
 * client.get<LeadContractType[]>('/leads/12345/contracttypes').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 * @example Add ContractTypes to a Lead
 * ```
 * // payload is an array of LeadContractType elements to be added
 * client.post<LeadContractType[]>('/leads/12345/contracttypes', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.Id); });
 *      }
 * });
 * ```
 */
export interface LeadContractType {
  Id: number;
  Name: string;
  Description: string;
  IsAvailable: boolean;
  ContractTypeOrder: null,
  IsDeleted: boolean;
  CreateDate: string;
  Old_ID: number;
  ROW_VERSION: string;
}
