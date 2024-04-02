import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";
import { Goal } from "../Models/Goal";
import { updateEmployeeCommentsAPI } from "../Services/GoalsAPIService";
import { UpdatePR } from "./UpdatePR";
import { useState } from "react";

interface GoalInterface {
  data: Goal;
}

interface thisEmployee {
  employeeID: number;
  role: boolean;
}

export function SingleGoal(props: any) {
  const [showAddCommentsComponent, setShowAddCommentsComponent] =
    useState(false);
  const [generate, setGenerate] = useState(false);

  function showAddCommentFunction() {
    if (showAddCommentsComponent) {
      setShowAddCommentsComponent(false);
    } else {
      setShowAddCommentsComponent(true);
    }

    document.getElementById("addcommentbutton")!.innerText =
      "Hide Add Comment Button";
  }

  function refresh() {
    setGenerate(!generate);
  }

  return (
    <>
      <h4>Goal Details - ID {props.data.goalID}</h4>
      <p>Goal Type: {props.data.goalType}</p>
      <p>Goal Description: {props.data.goalDescription}</p>
      <p>Employee Comments: {props.data.employeeComments}</p>
      <p>Weight: {props.data.weight.toFixed(2)}%</p>
      <br></br>
      <button
        id="addcommentbutton"
        className="buttons"
        onClick={showAddCommentFunction}
      >
        Add Goal Comments
      </button>
      {showAddCommentsComponent && (
        <UpdatePR data={props.data.goalID}></UpdatePR>
      )}
    </>
  );
}
