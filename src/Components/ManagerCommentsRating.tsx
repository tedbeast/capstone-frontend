import React, {useState, useEffect} from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { updateManagerCommentsRatingAPI } from "../Services/GoalsAPIService";

//component will allow the EmployeePerformanceReview to dynamically display if the Manager comments section should have an input box or be read only

interface reviewProps {
    data: PerformanceReview,
    customKey: number,
    role: boolean,
    managerID: number
}

export function ManagerCommentsRating(props: reviewProps) {
    const [newComments, setNewComments] = useState<string>(""); // State for input box
    const [newRating, setNewRating] = useState<number>(5); // State for input box
    // const [roleMgr, setRoleMgr] = useState(false);
    const [updateTracker, setUpdateTracker] = useState(false);

    // Handle input change
    const handleCommentChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setNewComments(e.target.value);
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRating(parseInt(e.target.value));
    };

    const handleSaveComments = () => {
        let updatedReview: PerformanceReview = {
            performanceReviewID: props.data.performanceReviewID,
            deadlineDate: props.data.deadlineDate,
            managerComments: newComments,
            rating: newRating,
            goals: props.data.goals,
            employee: props.data.employee
        }
        console.log(updatedReview);
        updateManagerCommentsRatingAPI(props.customKey, props.data.performanceReviewID, updatedReview)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ' + response.status)
                }
                return response.json();
            })
            .then(() => {setUpdateTracker(!updateTracker); props.data.managerComments = newComments; props.data.rating = newRating;})
            .then((data) => {
                console.log('Data:', data);
                console.log('Saving comments: ', newComments);
                console.log('Saving rating: ', newRating)
            })            
            .catch((error) => {
                console.error('Error:', error.message);
                alert('Failed to update comments. Please review inputs and try again.')
            });
    };

    return (

        <div>
            <h2>Performance Review Manager Comments & Rating</h2>
            {
                props.role && props.customKey != props.managerID ? (
                    <>
                        <p><strong>Deadline Date: </strong> {props.data.deadlineDate}</p>
                        <p><strong>Current Manager Comments: </strong> {props.data.managerComments}</p>
                        <input
                            type="text"
                            placeholder="Enter New Comments"
                            value={newComments}
                            onChange={handleCommentChange}
                        />
                        <p><strong>Current Rating: </strong>{props.data.rating}</p>
                        <label>Enter New Rating:</label><input
                            type="number"
                            placeholder="5"
                            min="1"
                            max="5"
                            value={newRating}
                            onChange={handleRatingChange}
                        />
                        <div></div>
                        <button onClick={handleSaveComments}>Save</button>
                    </>
                ) : (
                    <> 
                        <p><strong>Deadline Date: </strong> {props.data.deadlineDate}</p>
                        {props.data.managerComments && (<><p><strong>Manager Comments: </strong>{props.data.managerComments}</p></>)}
                        {props.data.managerComments && (<><p><strong>Rating: </strong>{props.data.rating}</p></>)}
                    </>
                )}
        </div>
    );
}
