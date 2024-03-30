import React, { useState, useEffect } from 'react';
import { getAverageRatingPerEmployeeId } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file

interface RatingData {
    employeeId: number;
    employeeName: string;
    managerId: number;
    averageRating: number;
}

function AverageRatingReport() {
    const [averageRatings, setAverageRatings] = useState<RatingData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAverageRatingPerEmployeeId();
                if (response.ok) {
                    const data: number[][] = await response.json();
                    const formattedData: RatingData[] = data.map((item) => ({
                        employeeId: item[0],
                        employeeName: item[1].toString(),
                        managerId: item[2],
                        averageRating: item[3],
                    }));
                    setAverageRatings(formattedData);
                } else {
                    console.error('Error fetching average ratings:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching average ratings:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="average-ratings-container">
            <h1>Average Ratings Report</h1>
            <table className="ratings-table">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Manager ID</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {averageRatings.map((rating) => (
                        <tr key={rating.employeeId}>
                            <td>{rating.employeeId}</td>
                            <td>{rating.employeeName}</td>
                            <td>{rating.managerId}</td>
                            <td>{rating.averageRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AverageRatingReport;