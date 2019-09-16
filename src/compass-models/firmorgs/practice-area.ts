export interface PracticeArea {
  PracticeAreaId: number;
  PracticeAreaName: string;
  PracticeAreaAcronym: string;
  PracticeAreaAddress1: string;
  PracticeAreaAddress2: string;
  PracticeAreaCity: string;
  PracticeAreaStateID: number;
  PracticeAreaZip: string;
  PracticeAreaCountryID: number;
  PracticeAreaPhone: string;
  PracticeAreaFax: string;
  PracticeAreaEmail: string;
  PracticeAreaUrl: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_practiceareaid: string;
  practiceareaSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  ROW_VERSION: string;
}
