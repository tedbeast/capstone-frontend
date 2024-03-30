import React, { useState, useEffect } from 'react';
import { getLowRatingEmployees } from '../../Services/ReportingAPIServices'; // Import your service function


interface EmployeeData {
    employeeId: number;
    employeeName: string;
    managerId: number;
    averageRating: number;
}

function LowRatingEmployees() {
    const [employees, setEmployees] = useState<EmployeeData[]>([]);

    useEffect(() => {
        async function fetchEmployees() {
            try {
                const response = await getLowRatingEmployees();
                if (response.ok) {
                    const data: number[][] = await response.json();
                    const formattedData: EmployeeData[] = data.map((item) => ({
                        employeeId: item[0],
                        employeeName: item[1].toString(),
                        managerId: item[2],
                        averageRating: item[3],
                    }));
                    setEmployees(formattedData);
                } else {
                    console.error('Error fetching low rating employees:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching low rating employees:', error);
            }
        }
        fetchEmployees();
    }, []);

    return (
        <div>
            <h1>Low Rating Employees</h1>
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Manager ID</th>
                        <th>Average Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeId}>
                            <td>{employee.employeeId}</td>
                            <td>{employee.employeeName}</td>
                            <td>{employee.managerId}</td>
                            <td>{employee.averageRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LowRatingEmployees;