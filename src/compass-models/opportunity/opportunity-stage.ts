import { OpportunityStageType } from "./opportunity-stage-type";

/**
 * @example Read all Opportunity Stages
 * ```
 * client.get<OpportunityStage[]>('/opportunities/stage').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StageID); });
 *      }
 * });
 * ```
 * @example Read a Opportunity's Stages
 * ```
 * client.get<OpportunityStage[]>('/opportunities/12345/stage').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StageID); });
 *      }
 * });
 * ```
 * @example Add Stage to an Opportunity
 * ```
 * // payload is an array of OpportunityStage elements to be added
 * client.post<OpportunityStage[]>('/opportunities/12345/stage', payload).then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StageID); });
 *      }
 * });
 * ```
 */
export interface OpportunityStage {
  StageID: number;
  StageName: string;
  StageType: OpportunityStageType;
}
