import React from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Employee } from "../Models/Employee";
import "./Performance.css";

interface myPerformanceProps {
  data: PerformanceReview;
}

export function PerformanceReviewEntry(props: myPerformanceProps) {
  return (
    <>
      <div className="perform-div">
        <label className="perform-label">
          Employee Name: {/*props.data.employee.name*/}
        </label>
      </div>
      <div className="perform-div">
        <label className="perform-label">Goal:</label> {props.data.goalType}
        <br></br>
        <label className="perform-label">Weight: </label>
        {props.data.weight}
        <br></br>
        <label className="perform-label">Target Date: </label>
        <br></br>
        <label className="perform-label">Deadline Date: </label>
      </div>
      <div className="perform-div">
        <label className="perform-label">Employee Comments: </label>
        {props.data.employeeComments}
        <br></br>
        <label className="perform-label">Employee Rating: </label>
      </div>
      <div className="perform-div">
        <label className="perform-label">Manager Comments: </label>
        {props.data.managerComments}
        <br></br>
        <label className="perform-label">Manager Rating: </label>
      </div>
    </>
  );
}
