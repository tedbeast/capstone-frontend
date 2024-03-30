import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Goal } from "../Models/Goal";
import { Employee } from "../Models/Employee";
import { ManagerCommentsRating } from "./ManagerCommentsRating";
import { getPerformanceByEmployeeAPI } from "../services/GoalsAPIService";


interface thisEmployee{
    data: Employee
}

export function EmployeePerformanceReview() {

    //API call
    const [performanceReview, setperformanceReview] = useState<PerformanceReview[]>([]);
    const [employeeID, setEmployeeID] =useState<number>(4);
   
      
    function getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
    }


    useEffect(() => {
        const storedEmployeeId = getItem<string>('username');
        // if (storedEmployeeId) {
        //     const employeeIdAsInt = parseInt(storedEmployeeId, 10);
            getPerformanceByEmployeeAPI(employeeID)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    setperformanceReview(data);
                    console.log(data)}
                    );
        // }
    }, []);



    //map to single employee review component
    // displays all fields - finalized view?
    return (
        <>
     <div>
      <h1>Employee Performance Review</h1>
      {performanceReview.map((review) => (
        <div key={review.performanceReviewID}>
          {/* <p>Review ID: {review.performanceReviewID}</p> */}
          <p>Deadline Date: {review.deadlineDate}</p>
          {/*Node should structure where if employee allow to edit for comments*/}
          <h2>Goals</h2>
          <ul>
            {review.goals.map((goal) => (
              <li key={goal.goalID}>
                <strong>Goal Type:</strong> {goal.goalType}
                <br />
                <strong>Description:</strong> {goal.goalDescription}
                <br />
                <strong>Weight:</strong>{goal.weight.toFixed(2)}%
                {/* Render other goal attributes as needed */}
              </li>
            ))}
          </ul>
          {/* Node for if manager then allow edit, otherwise display */}
          <ManagerCommentsRating key ={review.performanceReviewID} data={review} customKey={employeeID} ></ManagerCommentsRating>
        </div>
      ))}
    </div>
        </>

    )
}
