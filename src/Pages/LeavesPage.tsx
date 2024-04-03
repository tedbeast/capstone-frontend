import React from "react";
import { Employee } from "../Models/Employee"; // Ensure this path matches your project structure
//import { WelcomeLoggedInUser} from "../Components/WelcomeLoggedInUser";
import { Roles } from "../Models/Roles";
import ManagerLeaveUI from "../Components/ManagerLeaveUI";
import EmployeeLeaveUI from "../Components/EmployeeLeaveUI";
import HolidayLeave from "../Components/HolidayLeave";

interface LeavesPageProps {
    employee: Employee;
    }
    
    export const LeavesPage: React.FC<LeavesPageProps> = ({ employee }) => {
    return (
    <div>
    {employee.role === Roles.MANAGER ? (
    <ManagerLeaveUI employee={employee} />
    ) : (
    <EmployeeLeaveUI employee={employee} />
    )}
    <HolidayLeave /> {/* Render the HolidayLeave component */}
    </div>
    );
    };