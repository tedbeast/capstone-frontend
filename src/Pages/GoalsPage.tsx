import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { AddGoal } from "../Components/AddGoal";
import { PerformanceReviewList } from "../Components/PerformanceListByManager";
import { ListGoal } from "../Components/ListGoal";

export function GoalsPage(){
    const testManagerID = 1;

    return (
    <>
    <ListGoal data = {1}></ListGoal>
    {/*<PerformanceReviewList managerIdProp={testManagerID}></PerformanceReviewList> */}
    </>
    )
};