import React, { useState, useEffect } from 'react';
import { getRatingPerGoalType } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file

interface RatingData {
    goalType: string;
    averageRating: number;
    employeeID: number;
    name: string;
    jobTitle: string;
    managerID: number;
}

function RatingPerGoalTypeReport() {
    const [averageRatings, setAverageRatings] = useState<RatingData[]>([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getRatingPerGoalType();
                if (response.ok) {
                    const data: number[][] = await response.json();
                    const formattedData: RatingData[] = data.map((item) => ({
                        goalType: String(item[0]),
                        averageRating: item[1],
                        employeeID: item[2],
                        name: item[3].toString(),
                        jobTitle: item[4].toString(),
                        managerID: item[5],
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

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredRatings = averageRatings.filter((rating) =>
        rating.goalType.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className="average-ratings-container">
            <h2>Average Ratings per Goal Type</h2>
            <input
                type="text"
                placeholder="Filter by Goal Type"
                value={filterText}
                onChange={handleFilterChange}
            />
            <table className="ratings-table">
                <thead>
                    <tr>
                        <th>Goal Type</th>
                        <th>Average Rating</th>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Job Title</th>
                        <th>Manager ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRatings.map((rating) => (
                        <tr key={rating.employeeID}>
                            <td>{rating.goalType}</td>
                            <td>{rating.averageRating}</td>
                            <td>{rating.employeeID}</td>
                            <td>{rating.name}</td>
                            <td>{rating.jobTitle}</td>
                            <td>{rating.managerID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RatingPerGoalTypeReport;