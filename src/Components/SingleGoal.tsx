import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";
import { Goal } from "../Models/Goal";

interface GoalInterface {
  data: Goal;
}

interface thisEmployee {
  employeeID: number;
  role: boolean;
}

export function SingleGoal(props: GoalInterface) {
  return (
    <>
      <h4>Goal Details - ID {props.data.goalID}</h4>
      <p>Goal Type: {props.data.goalType}</p>
      <p>Goal Description: {props.data.goalDescription}</p>
      <p>Employee Comments: {props.data.employeeComments}</p>
      <p>Weight: {props.data.weight.toFixed(2)}%</p>
    </>
  );
}
