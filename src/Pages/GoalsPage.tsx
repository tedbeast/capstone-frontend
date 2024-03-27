import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { AddGoal } from "../Components/AddGoal";
import { PerformanceReviewList } from "../Components/PerformanceListByManager";

export function GoalsPage(){
    const testManagerID = 1;

    return (
    <>
    {/* <GoalList></GoalList> */}
    <AddGoal></AddGoal>
    <PerformanceReviewList managerIdProp={testManagerID}></PerformanceReviewList>
    </>
        )
};