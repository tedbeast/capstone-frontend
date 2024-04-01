import React, { useState, useEffect } from 'react';
import { getAverageRatingPerEmployeeId } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface RatingData {
    employeeId: number;
    employeeName: string;
    managerId: number;
    jobTitle: string; // Change the type to string
    deadlineDate: string; // Change the type to string (formatted as YYYY-MM-DD)
    averageRating: number;
}

function AverageRatingReport() {
    const [averageRatings, setAverageRatings] = useState<RatingData[]>([]);
    const [filterText, setFilterText] = useState('');

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
                        jobTitle: item[3].toString(), // Convert to string
                        deadlineDate: item[4].toString(), // Convert to string
                        averageRating: item[5],
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

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredRatings = averageRatings.filter((rating) =>
        rating.employeeName.toLowerCase().includes(filterText.toLowerCase()) ||
        rating.jobTitle.toLowerCase().includes(filterText.toLowerCase()) ||
        rating.managerId.toString().includes(filterText)
    );

    return (
        <div className="average-ratings-container">
            <h1>Average Ratings Report</h1>
            <input
                type="text"
                placeholder="Filter by Name, Job Title, or Manager ID"
                value={filterText}
                onChange={handleFilterChange}
            />
            <BarChart width={750} height={400} data={filteredRatings}>
                <XAxis dataKey="employeeName" />
                <YAxis type="number" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="averageRating" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default AverageRatingReport;