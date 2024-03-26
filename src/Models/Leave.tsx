import { Employee } from "./Employee";

type TimestampString = string;
export interface Leave {
    leaveId: number;
    leaveName: string;
    startDate: TimestampString;
    endDate: TimestampString;
    acceptRejectFlag: boolean;
    active: boolean;
    employee: Employee;
}