import React from "react";
import { Employee } from "./Employee";

export interface PerformanceReview {
    performanceReviewID: number,
    goalType: string,
    employeeComments: string,
    targetDate: Date,
    weight: number,
    deadlineDate: Date,
    managerComments: string,
    employee: Employee
}