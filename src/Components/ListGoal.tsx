import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getPerformanceByEmployeeAPI } from "../Services/GoalsAPIService";
import { AddGoal } from "./AddGoal";
import { SinglePerformance } from "./SinglePerformance";

interface PerformanceReviewInterface {
  data: number;
}

export function ListGoal() {
  const [allGoals, setAllGoals] = useState<PerformanceReview[]>([]);
  const [showAddGoalComponent, setShowAddGoalComponent] = useState(false);
  const [generate, setGenerate] = useState(false);

  function showAddGoalFunction() {
    if (showAddGoalComponent) {
      setShowAddGoalComponent(false);
    } else {
      setShowAddGoalComponent(true);
    }

    document.getElementById("addgoalbutton")!.innerText =
      "Hide Add Goal Button";
  }

  function refresh() {
    setGenerate(!generate);
  }

  useEffect(() => {
    getPerformanceByEmployeeAPI(1)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllGoals(json);
      });
  }, [generate]);

  return (
    <>
      <h1>Your Performance Goals</h1>
      <button id="addgoalbutton" onClick={showAddGoalFunction}>
        Add a new Goal
      </button>
      {showAddGoalComponent && <AddGoal></AddGoal>}
      <button onClick={refresh}>Refresh</button>
      {allGoals.map((prs) => {
        return (
          <SinglePerformance
            key={prs.performanceReviewID}
            data={prs}
          ></SinglePerformance>
        );
      })}
    </>
  );
}
