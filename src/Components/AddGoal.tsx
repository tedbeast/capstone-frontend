import React, { SyntheticEvent, useState } from "react";
import { Goal } from "../Models/Goal";
import { postGoalsAPI } from "../Services/GoalsAPIService";

export function AddGoal() {
  const [userGoalType, setUserGoalType] = useState("");
  const [userGoalDescription, setUserGoalDescription] = useState("");
  const [goalAPIResut, setGoalAPIResult] = useState("");

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

    postGoalsAPI(newGoal, 1)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
    //.then(() => {setGoalAPIResult("Goal added successfully!"); setTimeout(window.location.reload.bind(window.location), 1500);})
  }

  return (
    <>
      <h1>Enter your Goals</h1>
      <div className="w3-half">
        <label>Goal Type: </label>
        <input
          type="text"
          onChange={goalTypeHandler}
          value={userGoalType}
        ></input>
      </div>
      <div className="w3-half">
        <label>Goal Description: </label>
        <input
          type="text"
          onChange={goalDescriptionHandler}
          value={userGoalDescription}
        ></input>
      </div>
      <button onClick={buttonClickHandler}>Submit</button>
      <p>{goalAPIResut}</p>
    </>
  );
}
