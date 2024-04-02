import React, { useEffect, useState } from "react";

import { Employee } from "../Models/Employee";
import { getAllEmployeesAPI } from "../Services/AdminAPIService";
import {SingleEmployee} from "./SingleEmployee";

export function EmployeeList() {
    const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        getAllEmployeesAPI()
            .then(response => response.json())
            .then(json => {
                setAllEmployees(json);
            });
    }, []);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
    };

    const filteredEmployees = allEmployees.filter(employee => {
        const lowerCaseFilterText = filterText.toLowerCase();

        return employee.employeeID.toString().toLowerCase().includes(lowerCaseFilterText) ||
               employee.jobTitle.toLowerCase().includes(lowerCaseFilterText) ||
               employee.role.toLowerCase().includes(lowerCaseFilterText);
    });

    return (
        <>
            <input
                type="text"
                placeholder="Filter by EmployeeID, Job Title, or Role"
                value={filterText}
                onChange={handleFilterChange}
                style={{ width: '50%', padding: '8px', fontSize: '16px' }}
            />

            {filteredEmployees.length <= 0 && <p><br />There are currently no Employees. Try adding one!</p>}

            {filteredEmployees.map(employee => <SingleEmployee key={employee.employeeID} data={employee}></SingleEmployee>)}
        </>
    );
}