import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Goal } from "../Models/Goal";
import { updateEmployeeCommentsAPI } from "../Services/GoalsAPIService";

interface GoalInterface {
  data: Goal;
}

interface thisEmployee {
  employeeID: number;
  role: boolean;
}

export function UpdatePR(props: any) {
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

  const updateThisGoal = () => {
    let myGoal: Goal = {
      goalID: thisGoalID,
      goalType: thisGoalType,
      goalDescription: thisGoalDescription,
      employeeComments: thisEmployeeComments,
      weight: thisGoalWeight,
    };

    updateEmployeeCommentsAPI(thisGoalID, props.employeeID, myGoal);
    window.location.reload();
  };

  return (
    <React.Fragment>
      <h1>Add Goal Comments</h1>
      <form>
        Comments:{" "}
        <input
          type="string"
          value={thisEmployeeComments}
          onChange={(e) => setThisEmployeeComments(e.target.value)}
          name="goalCommentsInput"
        ></input>
        <br />
      </form>
      <button className="buttons" onClick={updateThisGoal}>
        Update Goal
      </button>
    </React.Fragment>
  );
}
