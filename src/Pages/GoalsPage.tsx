import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
import { AddGoal } from "../Components/AddGoal";

export function GoalsPage(){


    return (
    <>
    {/* <GoalList></GoalList> */}
    <AddGoal></AddGoal>

    </>
        )
};