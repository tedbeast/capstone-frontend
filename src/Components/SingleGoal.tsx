import React, { useState } from "react";
import { Goal } from "../Models/Goal";
import { UpdatePR } from "./UpdatePR";

interface thisInterface {
  employeeID: number;
  role: boolean;
  data: Goal;
}

export function SingleGoal(props: thisInterface) {
  const [showAddCommentsComponent, setShowAddCommentsComponent] =
    useState(false);
  const [generate, setGenerate] = useState(false);

  function showAddCommentFunction() {
    if (showAddCommentsComponent) {
      setShowAddCommentsComponent(false);
    } else {
      setShowAddCommentsComponent(true);
    }

    //document.getElementById("addcommentbutton")!.innerText =
    //  "Hide Add Comment Button";
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
      {!props.role && (
        <button
          id="addcommentbutton"
          className="buttons"
          onClick={showAddCommentFunction}
        >
          Add Goal Comments
        </button>
      )}
      {showAddCommentsComponent && (
        <UpdatePR
          data={props.data}
          employeeID={props.employeeID}
          role={props.role}
        ></UpdatePR>
      )}
    </>
  );
}
