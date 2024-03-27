import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { AddGoal } from "../Components/AddGoal";
import { EmployeeDropdown } from "../Components/PerformanceReviewGetEmployeeReview";

export function GoalsPage(){


    return (
    <>
    {/* <GoalList></GoalList> */}
    <AddGoal></AddGoal>
    <EmployeeDropdown></EmployeeDropdown>


    </>
        )
};