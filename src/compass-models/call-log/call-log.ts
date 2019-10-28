export interface CallLog {
  id: number;
  startDate: string;
  endDate: string;
  CallType: string;
  subject: string;
  comments: string;
  isFollowup: boolean;
  CallDisposition: string;
  status: string;
  deleteRecord: boolean;
  CreatedBy: string;
  CreatedByUserId: number;
  CreateDateTime: string;
}

// This is used for the roles of contacts and personnel
export const enum CallLogRole {
  Association = 'Association',
  Attendee = 'Attendee',
  Caller = 'Caller',
}
