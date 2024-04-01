import { PerformanceReview } from "./PerformanceReview";

export interface Goal {
    goalID: number;
    goalType: string;
    goalDescription: string;
    employeeComments: string;
    weight: number;
    perfromanceReview: PerformanceReview;
    
}