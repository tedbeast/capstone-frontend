import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import {
  getAllGoalsAPI,
  getPerformanceByEmployeeAPI,
} from "../services/GoalsAPIService";
import { AddGoal } from "./AddGoal";
import { SingleGoal } from "./SingleGoal";
import { Goal } from "../Models/Goal";

export function ListGoal() {
  const [allGoals, setAllGoals] = useState<PerformanceReview[]>([]);
  const [showAddGoalComponent, setShowAddGoalComponent] = useState(false);

  function showAddGoalFunction() {
    if (showAddGoalComponent) {
      setShowAddGoalComponent(false);
    } else {
      setShowAddGoalComponent(true);
    }
  }

  useEffect(() => {
    getPerformanceByEmployeeAPI(1)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setAllGoals(json);
      });
  }, []);

  return (
    <>
      <h3>All Goals List!</h3>
      <button onClick={showAddGoalFunction}>Add a new Goal</button>
      {showAddGoalComponent && <AddGoal></AddGoal>}
      {allGoals.map((goals) => {
        return (
          <SingleGoal key={goals.performanceReviewID} data={goals}></SingleGoal>
        );
      })}
    </>
  );
}
