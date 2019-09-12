/**
 * @example Read all Opportunity StageTypes
 * ```
 * client.get<OpportunityStageType[]>('/opportunities/stage/stagetype').then(res => {
 *      if (res.success) {
 *          res.result.forEach(nextRes => { console.log(nextRes.StageTypeID); });
 *      }
 * });
 * ```
 */
export interface OpportunityStageType {
  StageTypeID: number;
  StageTypeName: string;
}
