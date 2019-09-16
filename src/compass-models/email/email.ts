export interface Email {
  Id: number;
  EmailId: number;
  EmailGuid: string;
  ExternalId: string;
  Subject: string;
  From: string;
  To: string;
  Cc: string;
  Bcc: string;
  Body: string;
  SentDate: string;
  OpenedDate: string;
  Body_EmailFrom: string;
  Body_EmailTo: string;
  Body_EmailCc: string;
  Body_EmailDate: string;
  Body_RemainingEmails: string;
  Header: string;
  HTML: string;
  ActiveInd: boolean;
  DeleteRecord: boolean;
  UserId: number;
}
