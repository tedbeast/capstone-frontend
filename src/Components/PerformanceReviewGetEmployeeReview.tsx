
// drop down which populates with each employee assigned to manager
// list is obtained thru getAllEmployessByManagerID
// map each employee to the dropdown list

import React, { SyntheticEvent, useEffect, useState } from "react";
import { Employee } from "../Models/Employee";
import { getAllEmployeeByManagerIdAPI } from "../services/GoalsAPIService";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";

interface thisEmployee {
    managerID: number,
    role: boolean
}

export function EmployeeDropdown(props: thisEmployee) {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<string>('TEST');
    const [selectedEmployeeID, setSelectedEmployeeID] = useState<number>(0);
    const [selectedEmployeeRender, setSelectedEmployeeRender] = useState(false);

    const roleMgr = props.role;
    const managerId = 1;

    useEffect(() => {
        console.log("getAllEmployeeByManagerIdAPI started");
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
        getSelectedEmployeeID();
        console.log("getSelectedEmployeeID started")
    },[selectedEmployee]

    )

    // this will be the function to then populate the review
    const handleEmployeeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEmployee(event.target.value);
        // Assuming each employee object has an 'id' property representing the EmployeeID
        console.log(event.target.value);
        console.log(selectedEmployee);
        // setTimeout(getSelectedEmployeeID, 1000);
        console.log("handleEmployeeChange timeout ran");
    };

    const getSelectedEmployeeID = () => {
        console.log(selectedEmployee);
        console.log(employees);
        const selectedEmployeeObject = employees.find((employee) => employee.name === selectedEmployee);
        console.log(selectedEmployeeObject);

        if (selectedEmployeeObject) {
            // Extract the EmployeeID
            setSelectedEmployeeID(selectedEmployeeObject.employeeID);
        }
        console.log(selectedEmployeeObject?.employeeID);
        console.log("selected employee"+selectedEmployeeID);
    };



    // const handleSelectedEmployeeChange = () => {
    //     setSelectedEmployeeRender(!selectedEmployeeRender);
    // };

    return (
        <div>
            <select value={selectedEmployee} onChange={handleEmployeeChange}>
                <option value="">Select an Employee</option>
                {employees.map((employee) => (
                    <option key={employee.employeeID} value={employee.name}>
                        {employee.name}
                    </option>
                ))}
            </select>
            {selectedEmployeeID &&
                <p>You Selected: {selectedEmployee}
                    <EmployeePerformanceReview role={roleMgr} employeeID={selectedEmployeeID}></EmployeePerformanceReview>
                </p>
            }
        </div>
    )
}
