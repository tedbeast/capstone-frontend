import React, {useEffect, useState} from "react";
import {Login} from "../Components/Login";
import {useNavigate} from "react-router-dom";
import { useAuth } from '../Components/AuthContext';

import {Employee} from "../Models/Employee";

export function WelcomeLoggedInUser() {
  const userId = localStorage.getItem("username");
  const userRole = localStorage.getItem("role");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedIn, login, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState<Employee | null>(null);
  const navigate = useNavigate();
  let managerID = localStorage.getItem("managerID");

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await fetch("http://localhost:9004/employee/" + userId);
      if (response.ok) {
        const data = await response.json();
        console.log("Employee details: ", data);
        setEmployeeDetails(data);
        localStorage.setItem("managerID", data.manager.managerID);
        console.log("managerID: ", localStorage.managerID);

      } else {
        console.error("Failed to fetch employee details");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  const handleLogin = () => {
//     setIsLoggedIn(true);
login();
  };
  const handleLogOut = () => {
//     console.log("User logged out.");
//     localStorage.removeItem("username");
//     localStorage.removeItem("role");
//     localStorage.removeItem("managerID");
//     setIsLoggedIn(false);
    logout();
    navigate("/login");
  };

  return (
      <>
        {userId ? (
            <>
              <h1>Welcome, {userRole}!</h1> {/* Display the user's role */}
              {/* Any other content for the welcome page */}
              <h2>Employee Details</h2>
              <div>
                <p>Employee
                  name: {employeeDetails ? employeeDetails.name : 'null'}</p>
                <p>Employee
                  role: {employeeDetails ? employeeDetails.role : 'null'}</p>
                <p>Employee
                  email: {employeeDetails ? employeeDetails.email : 'null'}</p>
                <p>Employee
                  phone: {employeeDetails ? employeeDetails.phoneNumber : 'null'}</p>
                <p>Employee
                  manager: {localStorage.managerID ? localStorage.managerID : 'null'}</p>

                {/* Add more fields as needed */}
              </div>

              <button onClick={handleLogOut}> Log Out</button>
            </>
        ) : (
            <Login onLogin={handleLogin}/>
        )}
      </>
  );
}