/**
 * Represents the Opportunity Stage Type.
 * @example Read all Opportunity Stage Types
 * ```
 * client.get<OpportunityStageType[]>('/opportunities/stage/stagetype').then( (res) => {
 *      if (res.success) { //returns an array of opportunity stage type elements
 *          res.result.forEach( (index) => { console.log(index.StageTypeID); } );
 *      } else { //something went wrong
 *          console.log(res.message);
 *      }
 * });
 * ```
 */
export interface OpportunityStageType {
  StageTypeID: number;
  StageTypeName: string;
}
