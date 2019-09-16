import { OpportunityStageType } from "./opportunity-stage-type";

export interface OpportunityStage {
  StageID: number;
  StageName: string;
  StageType: OpportunityStageType;
}
