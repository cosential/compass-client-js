export const enum MeetingPlanProcessTimeDurationType {
    seconds = 'seconds',
    minutes = 'minutes',
    hours = 'hours',
    days = 'days',
    weeks = 'weeks',
    months = 'months',
    years = 'years'
}

export interface MeetingPlan {
    Id: number;
    CallLogId: number;
    Objectives: string;
    CustomerActions: string;
    Purpose: string;
    ProcessTime: number;
    ProcessTimeDurationType: MeetingPlanProcessTimeDurationType;
    PayoffsForYou: string;
    PayoffsForMe: string;
    CheckPlan: string;
    Processes: string[];
    Questions: string[];
    Responses: string[];
}
