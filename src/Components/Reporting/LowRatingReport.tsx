import React, { useState, useEffect } from 'react';
import { getLowRatingEmployees } from '../../Services/ReportingAPIServices';
import './AverageRatingReports.css'; // Import your CSS file
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

interface RatingData {
    employeeId: number;
    employeeName: string;
    jobTitle: string; // Change the type to string
    managerId: number;
    averageRating: number;
}

function LowRatingEmployees() {
    const [lowRatings, setLowRatings] = useState<RatingData[]>([]);
    const [filterText, setFilterText] = useState('');

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

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredRatings = lowRatings.filter((rating) =>
        rating.employeeName.toLowerCase().includes(filterText.toLowerCase()) ||
        rating.jobTitle.toLowerCase().includes(filterText.toLowerCase()) ||
        rating.managerId.toString().includes(filterText)
    );

    return (
        <div className="low-ratings-container">
            <h1>Low Ratings Report</h1>
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
                    {filteredRatings.map((rating) => (
                        <tr key={rating.employeeId}>
                            <td>{rating.employeeId}</td>
                            <td>{rating.employeeName}</td>
                            <td>{rating.jobTitle}</td>
                            <td>{rating.managerId}</td>
                            <td>{rating.averageRating.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LowRatingEmployees;