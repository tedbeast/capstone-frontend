import React, { useState } from "react";
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";
import RatingPerGoalTypeReport from "../Components/Reporting/RatingPerGoalTypeReport";
import './ReportingPage.css';

export function ReportingPage() {
    const [activeReport, setActiveReport] = useState<string>("average"); // Default to "average" report

    const handleReportChange = (reportType: string) => {
        setActiveReport(reportType);
    };

    return (
        <div className="reporting-container">
            <div className="reporting-links">
                <button onClick={() => handleReportChange("average")}>Average Ratings</button>
                <button onClick={() => handleReportChange("low")}>Low Rating Employees</button>
                <button onClick={() => handleReportChange("goal")}>Rating per Goal Type</button>
            </div>
            <div className="reporting-section">
                {activeReport === "average" && <AverageRatingReport />}
                {activeReport === "low" && <LowRatingEmployees />}
                {activeReport === "goal" && <RatingPerGoalTypeReport />}
            </div>
        </div>
    );
}