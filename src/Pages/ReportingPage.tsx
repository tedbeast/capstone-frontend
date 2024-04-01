import React, { useState } from "react";
import AverageRatingReport from "../Components/Reporting/AverageRatingReport";
import LowRatingEmployees from "../Components/Reporting/LowRatingReport";

import './ReportingPage.css';

export function ReportingPage() {
    const [activeReport, setActiveReport] = useState<string>("average"); 

    const handleReportChange = (reportType: string) => {
        setActiveReport(reportType);
    };

    return (
        <div className="reporting-container">
            <div className="reporting-links">
                <button onClick={() => handleReportChange("average")}>Average Ratings</button>
                <button onClick={() => handleReportChange("low")}>Low Rating Employees</button>
                
            </div>
            <div className="reporting-section">
                {activeReport === "average" && <AverageRatingReport />}
                {activeReport === "low" && <LowRatingEmployees />}
                
            </div>
        </div>
    );
}