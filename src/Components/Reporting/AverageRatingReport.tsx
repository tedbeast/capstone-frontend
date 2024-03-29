import React, { useState, useEffect } from 'react';
import { getAverageRatingPerEmployeeId } from '../../Services/ReportingAPIServices';


interface RatingData {
    employeeId: number;
    averageRating: number;
}

function AverageRatingReport() {
    const [averageRatings, setAverageRatings] = useState<RatingData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getAverageRatingPerEmployeeId();
                if (response.ok) {
                    const data: RatingData[] = await response.json();
                    setAverageRatings(data);
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
        <div>
            <h1>Average Ratings Report</h1>
            <ul>
                {averageRatings.map((rating) => (
                    <li key={rating.employeeId}>
                        Employee ID: {rating.employeeId}, Average Rating: {rating.averageRating}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AverageRatingReport;