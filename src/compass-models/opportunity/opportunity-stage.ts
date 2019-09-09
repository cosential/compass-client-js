import { OpportunityStageType } from "./opportunity-stage-type";

/**
 * Represents the Opportunity Stage.
 * @example Read all Opportunity stages
 * ```
 * client.get<OpportunityStage[]>('/opportunities/stage').then( (res) => {
 *      if (res.success) { //returns an array of opportunity stage elements
 *          res.result.forEach( (index) => { console.log(index.StageID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Read a Opportunity's stage
 * ```
 * client.get<OpportunityStage[]>('/opportunities/2178463/stage').then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StageID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 * @example Add role to a opportunity
 * ```
 * // payload is an array of OpportunityStage elements to be added
 * client.post<OpportunityStage[]>('/opportunities/2178463/stage', payload).then( (res) => {
 *      if (res.success) {
 *          res.result.forEach( (index) => { console.log(index.StageID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityStage {
  StageID: number;
  StageName: string;
  StageType: OpportunityStageType;
}
