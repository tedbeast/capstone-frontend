import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";
import { Goal } from "../Models/Goal";

interface GoalInterface {
  data: Goal;
}

interface PerformanceReviewInterface {
  data: PerformanceReview;
}

interface thisEmployee {
  employeeID: number;
  role: boolean;
}

export function SingleGoal(props: PerformanceReviewInterface) {
  return (
    <>
      <h4>Performance Review Details - ID {props.data.performanceReviewID}</h4>
    </>
  );
}
