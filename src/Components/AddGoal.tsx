import React, { SyntheticEvent, useState } from "react";
import { GoalsModel } from "../Models/GoalsModel";
import { postGoalsAPI } from "../services/GoalsAPIService";

export function AddGoal(){
    const [userGoalType, setUserGoalType] = useState("");
    const [userGoalDescription, setUserGoalDescription] = useState("");

    function goalTypeHandler(event:SyntheticEvent){
        let goalTypeTextBox = event.target as HTMLTextAreaElement;
        setUserGoalType(goalTypeTextBox.value);
        console.log(goalTypeTextBox.value);
    }

    function goalDescriptionHandler(event:SyntheticEvent){
        let goalDescriptionTextBox = event.target as HTMLTextAreaElement;
        setUserGoalDescription(goalDescriptionTextBox.value);
        console.log(goalDescriptionTextBox.value);
    }

    function buttonClickHandler(){
        let newGoal : GoalsModel = {
            goalType:userGoalType,
            goalDescription:userGoalDescription,
            employeeComments:"",
            weight:0
        }

        postGoalsAPI(newGoal, 1)
        .then(response => {return response.json()})
        .then(json => {console.log(json)});
    }

    return(<>
        <h1>Enter your Goals</h1>
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