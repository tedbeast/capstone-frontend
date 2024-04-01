import React from "react";
import { Employee } from "../models/Employee"; // Ensure this path matches your project structure
import { Welcome } from "../Components/Welcome";
import { Roles } from "../models/Roles";
import ManagerLeaveUI from "../Components/ManagerLeaveUI";
import EmployeeLeaveUI from "../Components/EmployeeLeaveUI";

interface LeavesPageProps {
  employee: Employee;
}

export const LeavesPage: React.FC<LeavesPageProps> = ({ employee }) => {
  return employee.role === Roles.MANAGER ? (
    <ManagerLeaveUI employee={employee} />
  ) : (
    <EmployeeLeaveUI employee={employee} />
  );
};
