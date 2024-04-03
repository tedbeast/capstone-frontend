// drop down which populates with each employee assigned to manager
// list is obtained thru getAllEmployessByManagerID
// map each employee to the dropdown list
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Employee } from "../Models/Employee";
import { getAllEmployeeByManagerIdAPI } from "../Services/GoalsAPIService";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";

interface thisEmployee {
  managerID: number;
  role: boolean;
}

export function EmployeeDropdown(props: thisEmployee) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<string>('TEST');
    const [selectedEmployeeID, setSelectedEmployeeID] = useState<number>();

    const roleMgr = props.role;

    useEffect(() => {
        getAllEmployeeByManagerIdAPI(props.managerID) // this will come as prop???
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } return response.json();
            })
            .then((data) => {
                setEmployees(data);
            })
            .catch((error) => {
                console.error('Error fetching names:', error);
            });
    }, []);

    
    useEffect(() => {
        const selectedEmployeeObject = employees.find((employee) => employee.name === selectedEmployee);
        if (selectedEmployeeObject) {
                    // Extract the EmployeeID
                    setSelectedEmployeeID(selectedEmployeeObject.employeeID);
                }
        // Any other side effects you want to perform when selectedEmployee changes
      }, [selectedEmployee]);


      useEffect(() => {
        // Handle side effects based on the updated selectedEmployeeID
        console.log("Updated selected employee ID:", selectedEmployeeID);
        // Other side effects...
    }, [selectedEmployeeID]);

    // this will be the function to then populate the review
    const handleEmployeeChange = (event: SyntheticEvent) => {
        let selectedValue = event.target as HTMLSelectElement;
        setSelectedEmployee(selectedValue.value);
        // Assuming each employee object has an 'id' property representing the EmployeeID
    };

    return (
        <div>
            <select onChange={handleEmployeeChange} value={selectedEmployee}>
                <option value="">Select an Employee</option>
                {employees.map((employee) => (
                    <option key={employee.employeeID} value={employee.name}>
                        {employee.name}
                    </option>
                ))}
            </select>       

            {selectedEmployeeID &&
                <p>
                    <EmployeePerformanceReview role={roleMgr} employeeID={selectedEmployeeID} managerID={props.managerID}></EmployeePerformanceReview>
                </p>
            }
        </div>
    )
}
