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
