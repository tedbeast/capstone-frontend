import React, { useEffect, useState } from "react";
import { PerformanceReview } from "../Models/PerformanceReview";
import { getPerformanceByEmployeeAPI } from "../services/GoalsAPIService";

export function EmployeePerformanceReview() {

    //API call
    const [performanceReview, setperformanceReview] = useState<PerformanceReview>();

    function getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
    }

    useEffect(() => {
        const storedEmployeeId = getItem<string>('username');
        // if (storedEmployeeId) {
        //     const employeeIdAsInt = parseInt(storedEmployeeId, 10);
            const testEmployeeID = 2;
            getPerformanceByEmployeeAPI(testEmployeeID)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((json) => {
                    setperformanceReview(json);
                    console.log(json);
                });
        // }
    }, []);


    //map to single employee review component
    return (
        <>
            {/* <p>{performanceReview.map((performanceReview) => {
                return (
                    <PerformanceReviewEntry
                        key={performanceReview.performanceReviewID}
                        data={performanceReview}
                    ></PerformanceReviewEntry>
                );
            })}
            </p> */}
            {performanceReview}

        </>
    );

}