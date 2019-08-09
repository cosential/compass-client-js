/**
 * Represents the Lead ContractType.
 * @example Read all Leads ContractTypes
 * ```
 * client.get<LeadContractType[]>('/leads/contracttypes').then( (res) => {
 *      if (res.success) { //returns an array of lead ContractType elements
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Lead's lead ContractTypes
 * ```
 * client.get<LeadContractType[]>('/leads/5555999/contracttypes').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add ContractTypes to a lead
 * ```
 * // payload is an array of LeadContractType elements to be added
 * client.post<LeadContractType[]>('/leads/5555999/contracttypes', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.Id); } );
 *      } else { //something went wrong
 *          console.log(res.message);
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
