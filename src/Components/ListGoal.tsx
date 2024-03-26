import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getAllGoalsAPI, getGoalsByEmployeeAPI } from "../services/GoalsAPIService";
import { SingleGoal } from "./SingleGoal";

interface PerformanceReviewInterface {
    data:number;
}

export function ListGoal(props:PerformanceReviewInterface){
    const [allGoals, setAllGoals] = useState<PerformanceReview[]>([]);

    useEffect(()=>{
        getGoalsByEmployeeAPI(props.data)
        .then(response => {return response.json()})
        .then(json => {setAllGoals(json)})
    }, []);

    return (
        <>
        <h3>All Goals List!</h3>
        {allGoals.map(goals =>{return <SingleGoal key={goals.performanceReviewId} data={goals}></SingleGoal>})}
        </>
    )
}