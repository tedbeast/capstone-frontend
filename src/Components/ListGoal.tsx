import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getPerformanceByEmployeeAPI } from "../Services/GoalsAPIService";
import { AddGoal } from "./AddGoal";
import { SinglePerformance } from "./SinglePerformance";
import "../Components/Performance.css"

interface ListGoalInterface {
  role:boolean;
  employeeID:number;
}

export function ListGoal(props : ListGoalInterface) {
  const [allPerformanceReviews, setAllPerformanceReviews] = useState<PerformanceReview[]>([]);
  const [showAddGoalComponent, setShowAddGoalComponent] = useState(false);

  const [goalCounter, setGoalCounter] = useState(1);

  const listGoalCounterFunction = (goalCounterFromAddGoal: number) => {
    setGoalCounter(goalCounterFromAddGoal + 1);
  }

  function showAddGoalFunction() {
    if (showAddGoalComponent) {
      setShowAddGoalComponent(false);
      document.getElementById("addgoalbutton")!.innerText = "Add a New Goal";

    } else {
      setShowAddGoalComponent(true);
      document.getElementById("addgoalbutton")!.innerText = "Hide 'Enter Your Goals' Section";
    }
  }

  useEffect(() => {
    getPerformanceByEmployeeAPI(props.employeeID)
      .then((response) => {return response.json();})
      .then((json) => {setAllPerformanceReviews(json);})
  }, [goalCounter, props.employeeID]);

  return (
    <>
    <div className="container-perf">
      <h4>Your Performance Goals</h4>
      <button id="addgoalbutton" onClick={showAddGoalFunction}>Add a New Goal</button>
      {showAddGoalComponent && 
      <AddGoal goalCounterFunction={listGoalCounterFunction}></AddGoal>}
      {allPerformanceReviews.map((prs) => {return (
      <SinglePerformance key={prs.performanceReviewID} data={prs} role={props.role} employeeID={props.employeeID}></SinglePerformance>
      );})}
      </div>
    </>
  );
}
