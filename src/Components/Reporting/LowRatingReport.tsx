import React, { useState, useEffect } from 'react';
import { getLowRatingEmployees } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file

interface RatingData {
    employeeId: number;
    employeeName: string;
    jobTitle: string; // Change the type to string
    managerId: number;
    averageRating: number;
}

function LowRatingEmployees() {
    const [lowRatings, setLowRatings] = useState<RatingData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getLowRatingEmployees();
                if (response.ok) {
                    const data: number[][] = await response.json();
                    const formattedData: RatingData[] = data.map((item) => ({
                        employeeId: item[0],
                        employeeName: item[1].toString(),
                        jobTitle: item[2].toString(), // Convert to string
                        managerId: item[3],
                        averageRating: item[4],
                    }));
                    setLowRatings(formattedData);
                } else {
                    console.error('Error fetching low rating report:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching low rating report:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="low-ratings-container">
            <h1>Low Ratings Report</h1>
            <table className="ratings-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Job Title</th>
                        <th>Manager ID</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {lowRatings.map((rating) => (
                        <tr key={rating.employeeId}>
                            <td>{rating.employeeId}</td>
                            <td>{rating.employeeName}</td>
                            <td>{rating.jobTitle}</td>
                            <td>{rating.managerId}</td>
                            <td>{rating.averageRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LowRatingEmployees;