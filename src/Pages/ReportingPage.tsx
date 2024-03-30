import React from "react";
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";


export function ReportingPage() {
    return (<>
    <AverageRatingReport></AverageRatingReport>
    <LowRatingEmployees></LowRatingEmployees>
    </>
    
    )
}