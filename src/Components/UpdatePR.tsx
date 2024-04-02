import React from "react";
import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Goal } from "../Models/Goal";
import { updateEmployeeCommentsAPI } from "../Services/GoalsAPIService";

interface myInterface {
  employeeID: number;
  role: boolean;
  data: Goal;
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

    updateEmployeeCommentsAPI(props.employeeID, thisGoalID, myGoal);
    //window.location.reload();
  };

  return (
    <React.Fragment>
      <h1>Add Goal Comments</h1>
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
    </React.Fragment>
  );
}
