import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getPerformanceByEmployeeAPI } from "../Services/GoalsAPIService";
import { AddGoal } from "./AddGoal";
import { SinglePerformance } from "./SinglePerformance";


export function ListGoal() {
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
    getPerformanceByEmployeeAPI(1)
      .then((response) => {return response.json();})
      .then((json) => {setAllPerformanceReviews(json);})
  }, [goalCounter]);

  return (
    <>
      <h3>All Goals List!</h3>
      <button id="addgoalbutton" onClick={showAddGoalFunction}>Add a New Goal</button>
      {showAddGoalComponent && <AddGoal goalCounterFunction={listGoalCounterFunction}></AddGoal>}
      {allPerformanceReviews.map((prs) => {return (<SinglePerformance key={prs.performanceReviewID} data={prs}></SinglePerformance>);})}
    </>
  );
}
