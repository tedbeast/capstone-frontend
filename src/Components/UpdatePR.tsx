import React, { useEffect } from "react";
import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Goal } from "../Models/Goal";
import { updateEmployeeCommentsAPI } from "../Services/GoalsAPIService";

interface myInterface {
  employeeID: number;
  role: boolean;
  data: Goal;  
  goalCommentCounterFunction: Function
}

export function UpdatePR(props: myInterface) {
  const [thisGoalID, setThisGoalID] = useState(props.data.goalID);
  const [thisGoalType, setThisGoalType] = useState(props.data.goalType);
  const [thisGoalDescription, setThisGoalDescription] = useState(
    props.data.goalDescription
  );
  const [thisEmployeeComments, setThisEmployeeComments] = useState(
    props.data.employeeComments
  );
  const [thisGoalWeight, setThisGoalWeight] = useState(props.data.weight);

  const [goalCommentCounter, setGoalCommentCounter] = useState(1);

  const navigate = useNavigate();

  function commentsHandler(event: SyntheticEvent) {
    let commentsTextBox = event.target as HTMLTextAreaElement;
    setThisEmployeeComments(commentsTextBox.value);
    console.log(commentsTextBox.value);
  }

  const updateThisGoal = () => {
    let myGoal: Goal = {
      goalID: thisGoalID,
      goalType: thisGoalType,
      goalDescription: thisGoalDescription,
      employeeComments: thisEmployeeComments,
      weight: thisGoalWeight,
    };

    updateEmployeeCommentsAPI(props.employeeID, thisGoalID, myGoal) 
    .then((response) => {return response.json();})   
    .then(() => {setGoalCommentCounter(goalCommentCounter+1); 
      props.goalCommentCounterFunction(goalCommentCounter);
      props.data.employeeComments = thisEmployeeComments;
    });;
  };

  return (
    <React.Fragment>
      <h5>Add Goal Comments</h5>
      <input
        type="string"
        value={thisEmployeeComments}
        onChange={commentsHandler}
        name="goalCommentsInput"
      ></input>
      <br />
      <button className="buttons" onClick={updateThisGoal}>
        Update Goal
      </button>
      <br></br>
    </React.Fragment>
  );
}
