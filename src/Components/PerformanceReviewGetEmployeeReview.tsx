// drop down which populates with each employee assigned to manager
// list is obtained thru getAllEmployessByManagerID
// map each employee to the dropdown list

import React, { useEffect, useState } from "react";
import { Employee } from "../Models/Employee";
import { getAllEmployeeByManagerIdAPI } from "../Services/GoalsAPIService";
import { EmployeePerformanceReview } from "./EmployeePeformanceReview";

interface thisEmployee {
  managerID: number;
  role: boolean;
}

export function EmployeeDropdown(props: thisEmployee) {
  const [empoloyees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const managerId = 1;
  useEffect(() => {
    getAllEmployeeByManagerIdAPI(props.managerID) // this will come as prop???
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error("Error fetching names:", error);
      });
  }, []);

  // this will be the function to then populate the review
  const handleEmployeeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedEmployee(event.target.value);
  };

  // Assuming each employee object has an 'id' property representing the EmployeeID
  // const selectedEmployeeObject = empoloyees.find((employee) => employee.name === selectedEmployee);
  // const selectedEmployeeID = selectedEmployeeObject?.employeeID; // Extract the EmployeeID

  // const myEmployeeID = parseInt(selectedEmployeeID);

  return (
    <div>
      <select value={selectedEmployee} onChange={handleEmployeeChange}>
        <option value="">Select an Employee</option>
        {empoloyees.map((employee) => (
          <option key={employee.employeeID} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
      {selectedEmployee && (
        <p>
          You Selected: {selectedEmployee}
          {/* <EmployeePerformanceReview role={roleMgr} employeeID={selectedEmployeeID}></EmployeePerformanceReview> */}
        </p>
      )}
    </div>
  );
}
