import React from "react";
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";
import RatingPerGoalTypeReport from "../Components/Reporting/RatingPerGoalTypeReport";


export function ReportingPage() {
    return (<>
    <AverageRatingReport></AverageRatingReport>
    <LowRatingEmployees></LowRatingEmployees>
    <RatingPerGoalTypeReport></RatingPerGoalTypeReport>
    </>
    
    )
}