import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getAllGoalsAPI, getGoalsByEmployeeAPI } from "../services/GoalsAPIService";
import { AddGoal } from "./AddGoal";
import { SingleGoal } from "./SingleGoal";

interface PerformanceReviewInterface {
    data:number;
}

export function ListGoal(props:PerformanceReviewInterface){
    const [allGoals, setAllGoals] = useState<PerformanceReview[]>([]);
    const [showAddGoalComponent, setShowAddGoalComponent] = useState(false);

    function showAddGoalFunction(){
        if(showAddGoalComponent) {
            setShowAddGoalComponent(false)
        }
        else {
            setShowAddGoalComponent(true);
        }
    }
    useEffect(()=>{
        getGoalsByEmployeeAPI(props.data)
        .then(response => {return response.json()})
        .then(json => {setAllGoals(json)})
    }, []);

    return (
        <>
        <h3>All Goals List!</h3>
        <button onClick={showAddGoalFunction}>Add a new Goal</button>
        {showAddGoalComponent && <AddGoal></AddGoal>}
        {allGoals.map(goals =>{return <SingleGoal key={goals.performanceReviewID} data={goals}></SingleGoal>})}
        </>
    )
}