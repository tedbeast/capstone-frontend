import React from "react";
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";
import RatingPerGoalTypeReport from "../Components/Reporting/RatingPerGoalTypeReport";
import './ReportingPage.css'; // Import your CSS file (create this file if it doesn't exist)

export function ReportingPage() {
    return (
        <div className="reporting-container">
            <div className="reporting-section">
                <h2>Average Ratings Report</h2>
                <AverageRatingReport />
            </div>
            <div className="reporting-section">
                <h2>Low Rating Employees</h2>
                <LowRatingEmployees />
            </div>
            <div className="reporting-section">
                <h2>Rating per Goal Type Report</h2>
                <RatingPerGoalTypeReport />
            </div>
        </div>
    );
}

