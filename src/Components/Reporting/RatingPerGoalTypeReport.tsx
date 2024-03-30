import React, { useState, useEffect } from 'react';
import { getRatingPerGoalType } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file

interface RatingData {
    goalType: string;
    averageRating: number;
    employeeID: number;
    managerID: number;
}

function RatingPerGoalTypeReport() {
    const [averageRatings, setAverageRatings] = useState<RatingData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getRatingPerGoalType();
                if (response.ok) {
                    const data: number[][] = await response.json();
                    const formattedData: RatingData[] = data.map((item, index) => ({
                        goalType: String(item[0]),
                        averageRating: item[1],
                        employeeID: item[2],
                        managerID: item[3],
                    }));
                    setAverageRatings(formattedData);
                } else {
                    console.error('Error fetching Ratings per goal type report:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching Ratings per goal type report:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="average-ratings-container">
            <h2>Average Ratings per Goal Type</h2>
            <table className="ratings-table">
                <thead>
                    <tr>
                        <th>Goal Type</th>
                        <th>Average Rating</th>
                        <th>Employee ID</th>
                        <th>Manager ID</th>
                    </tr>
                </thead>
                <tbody>
                    {averageRatings.map((rating, index) => (
                        <tr key={index}>
                            <td>{rating.goalType}</td>
                            <td>{rating.averageRating}</td>
                            <td>{rating.employeeID}</td>
                            <td>{rating.managerID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RatingPerGoalTypeReport;