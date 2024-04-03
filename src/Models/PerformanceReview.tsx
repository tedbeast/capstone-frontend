import React from "react";
import { Employee } from "./Employee";
import { Goal } from "./Goal";

export interface PerformanceReview {
  performanceReviewID: number;
  deadlineDate: string;
  managerComments: string;
  rating: number;
  goals: Goal[];
  employee: Employee;
}
