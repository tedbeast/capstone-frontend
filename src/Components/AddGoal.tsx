import React, { SyntheticEvent, useState } from "react";
import { Goal } from "../Models/Goal";
import { postGoalsAPI } from "../Services/GoalsAPIService";

interface AddGoalInterface {
  goalCounterFunction: Function;
  employeeID: number
}

export function AddGoal(props : AddGoalInterface) {
  const [userGoalType, setUserGoalType] = useState("");
  const [userGoalDescription, setUserGoalDescription] = useState("");
  
  const [goalCounter, setGoalCounter] = useState(1);

  function goalTypeHandler(event: SyntheticEvent) {
    let goalTypeTextBox = event.target as HTMLTextAreaElement;
    setUserGoalType(goalTypeTextBox.value);
    console.log(goalTypeTextBox.value);
  }

  function goalDescriptionHandler(event: SyntheticEvent) {
    let goalDescriptionTextBox = event.target as HTMLTextAreaElement;
    setUserGoalDescription(goalDescriptionTextBox.value);
    console.log(goalDescriptionTextBox.value);
  }

  function buttonClickHandler() {
    let newGoal: Goal = {
      goalID: 0,
      goalType: userGoalType,
      goalDescription: userGoalDescription,
      employeeComments: "",
      weight: 0,
    };

    postGoalsAPI(newGoal, props.employeeID)
    .then((response) => {return response.json();})
    .then((json) => {console.log(json);})
    .then(() => {setGoalCounter(goalCounter+1); props.goalCounterFunction(goalCounter);});
  }

  return (
    <>
      <h4>Enter your Goals</h4>
      <div className="w3-half">
        <label>Goal Type: </label>
        <input type="text" onChange={goalTypeHandler} value={userGoalType}></input>
      </div>
      <div className="w3-half">
        <label>Goal Description: </label>
        <input type="text" onChange={goalDescriptionHandler} value={userGoalDescription}></input>
      </div>
      <button onClick={buttonClickHandler}>Submit</button>
    </>
  );
}
