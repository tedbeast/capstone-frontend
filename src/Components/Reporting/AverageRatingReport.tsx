import React, { useState, useEffect } from 'react';
import { getAverageRatingPerEmployeeId } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; 
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface RatingData {
    employeeId: number;
    employeeName: string;
    managerId: number;
    jobTitle: string; 
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
                        jobTitle: item[2].toString(), 
                        managerId: item[3],
                        averageRating: item[4],
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
                style={{ width: '50%', padding: '8px', fontSize: '16px' }}  
            />
            <BarChart width={750} height={400} data={filteredRatings}>
                <XAxis dataKey="employeeName" />
                <YAxis type="number" domain={[0, 5]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="averageRating" fill="#8884d8" />
            </BarChart>
            <br></br>

            <table className="ratings-table">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee ID</th>
                        <th>ManagerID</th>
                        <th>Job Title</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRatings.map((rating) => (
                        <tr key={rating.employeeId}>
                            <td>{rating.employeeName}</td>
                            <td>{rating.employeeId}</td>
                            <td>{rating.managerId}</td>
                            <td>{rating.jobTitle}</td>
                            <td>{rating.averageRating.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AverageRatingReport;