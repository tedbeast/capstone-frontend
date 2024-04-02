import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";
import { Goal } from "../Models/Goal";
import { SingleGoal } from "./SingleGoal";

interface PerformanceReviewInterface {
  data: PerformanceReview;
}

export function SinglePerformance(props: PerformanceReviewInterface) {
  return (
    <>
      <h4>Performance Review Details - ID {props.data.performanceReviewID}</h4>
      <p>Deadline Date: {props.data.deadlineDate}</p>
      <p>Manager Comments: {props.data.managerComments}</p>
      <p>Rating: {props.data.rating}</p>
      {props.data.goals.map(goals =>{return <SingleGoal key={goals.goalID} data={goals}></SingleGoal>})}
    </>
  );
}
