import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { ManagerCommentsRating } from "./ManagerCommentsRating";
import { SingleGoal } from "./SingleGoal";

interface PerformanceReviewInterface {
  data: PerformanceReview;
  role: boolean;
}

export function SinglePerformance(props: PerformanceReviewInterface) {
  return (
    <>
      <div className="container">
        <ul>
          <li>
            {props.data.goals.map((goals) => {
              return (
                <SingleGoal
                  key={goals.goalID}
                  data={goals}
                  role={props.role}
                  employeeID={props.data.employee.employeeID}
                ></SingleGoal>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
