import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { Goal } from "../Models/Goal";
import { Employee } from "../Models/Employee";
import { ManagerCommentsRating } from "./ManagerCommentsRating";
import { getPerformanceByEmployeeAPI } from "../Services/GoalsAPIService";
import { EmployeeDropdown } from "./PerformanceReviewGetEmployeeReview";
import { ListGoal } from "./ListGoal";

interface thisEmployee {
    employeeID: number,
    role: boolean,
    managerID: number
}

export function EmployeePerformanceReview(props: thisEmployee) {

    const [performanceReview, setperformanceReview] = useState<PerformanceReview[]>([]);

    //potentially move all this to GoalsPage as to pass employeeID down through child components?
    function getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
    }

    useEffect(() => {
        const storedEmployeeId = getItem<string>('username');
        // if (storedEmployeeId) {
        //     const employeeIdAsInt = parseInt(storedEmployeeId, 10);
        getPerformanceByEmployeeAPI(props.employeeID)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                setperformanceReview(data);
                console.log(data)
            }
            );
        // }
    }, [props.employeeID]);

    return (
        <>

            <div>
            <h3>Performance Review</h3>
            
                {performanceReview.map((review) => (
                    <div key={review.performanceReviewID}>
                        <p><strong>Deadline Date: </strong> {review.deadlineDate.substring(5, 10) + "-" + review.deadlineDate.substring(0, 4)}</p>
                        <ManagerCommentsRating key={review.performanceReviewID} data={review} customKey={props.employeeID} role={props.role} managerID={props.managerID}></ManagerCommentsRating>
                    </div>
                ))}
                <ListGoal employeeID={props.employeeID} role={props.role}></ListGoal>
            </div>
        </>

    )
}
