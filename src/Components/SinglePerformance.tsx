import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { ManagerCommentsRating } from "./ManagerCommentsRating";
import { SingleGoal } from "./SingleGoal";
import "../Components/Performance.css"

interface PerformanceReviewInterface {
  data: PerformanceReview;
  role: boolean;
  employeeID: number;
}

export function SinglePerformance(props: PerformanceReviewInterface) {
  return (
    <>
      <div className="container-back-perf">
        
            {props.data.goals.map((goals) => {
              return (
                <SingleGoal
                  key={goals.goalID}
                  data={goals}
                  role={props.role}
                  employeeID={props.employeeID}
                ></SingleGoal>
              );
            })}
         
      </div>
    </>
  );
}
