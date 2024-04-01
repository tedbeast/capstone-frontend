import React, { useEffect, useState } from "react";

import { Employee } from "../Models/Employee";
import { getAllEmployeesAPI } from "../Services/AdminAPIService";
import {SingleEmployee} from "./SingleEmployee";

export function EmployeeList() {
    const [allEmployees, setAllEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        getAllEmployeesAPI()
            .then(response => response.json())
            .then(json => {
                setAllEmployees(json);
            });
    }, []);

    return (
        <>
            {allEmployees.length <= 0 && <p><br />There are currently no Employees. Try adding one!</p>}

            {allEmployees.map(employee =>{return <SingleEmployee key={employee.employeeID} data={employee}></SingleEmployee>})}
           
        </>
    );
}