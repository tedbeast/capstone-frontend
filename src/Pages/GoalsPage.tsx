import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { AddGoal } from "../Components/AddGoal";
// import { PerformanceReviewList } from "../Components/PerformanceListByManager";
import { EmployeePerformanceReview } from "../Components/EmployeePeformanceReview";

export function GoalsPage(){
    const testManagerID = 1;
        //rendering depending on manager vs employee
    return (
    <>
    {/* <GoalList></GoalList> */}
    {/* <AddGoal></AddGoal> */}
    {/* <PerformanceReviewList managerIdProp={testManagerID}></PerformanceReviewList> */}
    <EmployeePerformanceReview></EmployeePerformanceReview>
    </>
        )
};