import React, { useState, useEffect } from 'react';
import { getAverageRatingPerEmployeeId } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

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
            <BarChart width={600} height={400} data={averageRatings}>
                <XAxis dataKey="employeeName" />
                <YAxis type="number" domain={[0,5]} /> {/* Set the y-axis domain */}
                <Tooltip />
                <Legend />
                <Bar dataKey="averageRating" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default AverageRatingReport;