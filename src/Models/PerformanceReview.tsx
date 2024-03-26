import { Employee } from "./Employee";

export interface PerformanceReview{
    performanceReviewId:number; 
    goalType:string;
    employeeComments:string;
    targetDate:Date;
    weight:number;
    deadlineDate:Date;
    managerComments:string;
    employee:Employee;
}