import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";

interface PerformanceReviewInterface {
    data:PerformanceReview;
}

export function SingleGoal(props:PerformanceReviewInterface){
    return(
        <>
            <h4>Performance Review Details - ID {props.data.performanceReviewID}</h4>
            <p>Goal Type: {props.data.goalType}</p>
            <p>Employee Comment: {props.data.employeeComments}</p>
        </>
    )
}