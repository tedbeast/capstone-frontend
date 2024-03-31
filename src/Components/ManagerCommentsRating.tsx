import React, { SelectHTMLAttributes, SyntheticEvent, useState, useEffect } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { interfaceExtends } from "@babel/types";
import { updateManagerCommentsRatingAPI } from "../services/GoalsAPIService";
import { Roles } from "../Models/Roles";


//component will allow the EmployeePerformanceReview to dynamically display if the Manager comments section should have an input box or be read only

interface reviewProps {
    data: PerformanceReview,
    customKey: number,
    role: boolean
}


export function ManagerCommentsRating(props: reviewProps) {
    const [newComments, setNewComments] = useState<string>(''); // State for input box
    const [debouncedComments, setDebouncedComments] = useState('');
    const [newRating, setNewRating] = useState<number>(5); // State for input box
    // const [roleMgr, setRoleMgr] = useState(false);

    const currentRole = props.role; 
    console.log(props);

    //check what the current role is
    // function checkRole(currentRole: 'EMPLOYEE'|'MANAGER'|'ADMIN') {
    //     if(currentRole === 'MANAGER'){
    //         setRoleMgr(true)
    //     } 
    // }

    // useEffect(()=>{
    //     //When you don't give useEffect a second parameter the logic of this function will trigger everytime the component mounts
    //     //check role everytime component mounts
    //     checkRole(currentRole);
    //     return ()=>{
    //         //If you return a function in the useEffect then the returning function will be called when the component unmounts.
    //         //check role everytime component unmounts
    //         checkRole(currentRole);
    //     }
    // },[]);

    useEffect(() => {
        // Debounce the input value
        const delay = 500; // Set your desired delay (in milliseconds)
        const timeoutId = setTimeout(() => {
            setDebouncedComments(newComments);
        }, delay);

        return () => {
            clearTimeout(timeoutId); // Cleanup: clear the timeout when component unmounts
        };
    }, [newComments]);

    // Handle input change
    const handleCommentChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
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
            goals: props.data.goals
        }
        console.log(updatedReview);
        updateManagerCommentsRatingAPI(props.customKey, props.data.performanceReviewID, updatedReview)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ' + response.status)
                }
                return response.json();
            })
            .then((data) => {
                console.log('Data:', data);
                console.log('Saving comments: ', newComments);
                console.log('Saving rating: ', newRating)
            })
            .catch((error) => {
                console.error('Error:', error.message);
                alert('Failed to update product. Please review inputs and try again.')
            });
        };

    return (
        
        <div>
            <h2>Performance Review Manager Comments & Rating</h2>
            {/*localStorage.getItem('role')*/
            props.role ? (
                <>
                    <p>Manager Comments:</p>
                    <p>{props.data.managerComments}</p>
                    <input
                        type="text"
                        placeholder="Enter new comments"
                        value={newComments}
                        onChange={handleCommentChange}
                    />
                    <p>Rating:</p>
                    <p>{props.data.rating}</p>
                    <input
                        type="number"
                        placeholder="5"
                        value={newRating}
                        onChange={handleRatingChange}
                    />
                    <div></div>
                    <button onClick={handleSaveComments}>Save</button>
                </>
            ) : (
                <p>{props.data.managerComments}</p>
            )}
        </div>
    );
}