import React, { useState } from "react";
import { Goal } from "../Models/Goal";
import { UpdatePR } from "./UpdatePR";
import "../Components/Performance.css"

interface thisInterface {
  employeeID: number;
  role: boolean;
  data: Goal;
}

export function SingleGoal(props: thisInterface) {
  const [showAddCommentsComponent, setShowAddCommentsComponent] =
    useState(false);  
  const [goalCommentCounter, setGoalCommentCounter] = useState(0);

  function showAddCommentFunction() {
    if (showAddCommentsComponent) {
      setShowAddCommentsComponent(false);      
      document.getElementById(props.data.goalID.toString())!.innerText = "Add Goal Comments";
    } else {
      setShowAddCommentsComponent(true);
      document.getElementById(props.data.goalID.toString())!.innerText = "Hide 'Add Goal Comments' Section";
    }
  }

  const singleGoalCommentCounterFunction = (goalCommentCounterFromUpdatePR: number) => {
    if(goalCommentCounter!=goalCommentCounterFromUpdatePR){
      setGoalCommentCounter(goalCommentCounterFromUpdatePR);
    }
  }
 
  return (
    <>
    <div className="container-perf">
      {/* <h4>Goal Details - ID {props.data.goalID}</h4> */} {/*changed*/}
      <h4>{props.data.goalType}</h4> {/*changed*/}
      <p>Goal Description: {props.data.goalDescription}</p>
      <p>Employee Comments: {props.data.employeeComments}</p>
      <p>Weight: {props.data.weight.toFixed(2)}%</p>
      <br></br>
      {!props.role && (
        <button
          id={props.data.goalID.toString()}
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
          goalCommentCounterFunction={singleGoalCommentCounterFunction}
        ></UpdatePR>
      )}
      </div>
    </>
  );
}
