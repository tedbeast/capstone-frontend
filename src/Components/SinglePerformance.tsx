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
      <div className="container">
        <ul>
          <li>
            <h4>
              Performance Review Details - ID {props.data.performanceReviewID}
            </h4>
            <p>
              <strong>Deadline Date: </strong> {props.data.deadlineDate}
            </p>
            <p>
              <strong>Manager Comments: </strong> {props.data.managerComments}
            </p>
            <p>
              <strong>Rating: </strong>
              {props.data.rating}
            </p>
            {props.data.goals.map((goals) => {
              return <SingleGoal key={goals.goalID} data={goals}></SingleGoal>;
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
