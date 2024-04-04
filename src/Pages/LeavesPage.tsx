import React from "react";
import { Employee } from "../Models/Employee"; // Ensure this path matches your project structure

import { Roles } from "../Models/Roles";
import ManagerLeaveUI from "../Components/ManagerLeaveUI";
import EmployeeLeaveUI from "../Components/EmployeeLeaveUI";



export const LeavesPage: React.FC = () => {
  const employeeIDString = localStorage.getItem("username");
  const roleString = localStorage.getItem("role");
  const employee: Employee = {
    employeeID: employeeIDString ? parseInt(employeeIDString) : 1, 
    role: roleString as Roles 
  }
  return employee.role === Roles.MANAGER ? (
    <ManagerLeaveUI employee={employee} />
    
  ) : (
    <EmployeeLeaveUI employee={employee} />
  );
};
