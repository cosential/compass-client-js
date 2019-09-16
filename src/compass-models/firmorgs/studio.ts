export interface Studio {
  StudioId: number;
  StudioName: string;
  StudioAcronym: string;
  StudioAddress1: string;
  StudioAddress2: string;
  StudioCity: string;
  StudioStateID: number;
  StudioZip: string;
  StudioCountryID: number;
  StudioPhone: string;
  StudioFax: string;
  StudioEmail: string;
  StudioUrl: string;
  CreateDate: Date;
  ModifyDate: Date;
  DeleteRecord: boolean;
  Available: boolean;
  UserID: number;
  old_studioid: string;
  StudioSalesGoal: number;
  MarginPercentage: number;
  AssessmentPercentage: number;
  AssociatedServices: string;
  ROW_VERSION: string;
}
