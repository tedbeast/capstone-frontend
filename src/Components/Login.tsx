import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeLoggedInUser } from '../Pages/WelcomeLoggedInUser';
import "./Login.css";

interface LoginProps {
onLogin: () => void;
}
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();


const getCredentials = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let getEmployeeID = (document.getElementById('employeeID') as
    HTMLInputElement).value;
    let getPassword = (document.getElementById('password') as HTMLInputElement).value;
    let role = localStorage.getItem('role');

    console.log("getEmployeeID:", getEmployeeID);
    console.log("getPassword:", getPassword);


    try {

        if(getEmployeeID == "" || getEmployeeID == null){
            setError("Employee ID field cannot be blank.");
            return;
        }

        if(getPassword == "" || getPassword == null){
            setError("Password field cannot be blank.");
            return;
        }
        if(!/^\d+$/.test(getEmployeeID)){
            setError("Employee ID must only contain numbers");
            return;
        }
        const response = await fetch('http://localhost:9004/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ employeeID: getEmployeeID, password:
            getPassword }),
        });

        console.log("reached response block");

        if (!response.ok){
            if(response.status === 401) {
                setError("Invalid credentials. Please check your username and password.");
                }
            else{
                setError("An error occurred. Please try again later.");
            }
            return;
        }
            const data = await response.json();
            console.log("Login successful: ", data);
            setLoggedIn(true);
            onLogin(); //Call the onLogin function passed as prop
            navigate('/welcome');
            localStorage.setItem('username', getEmployeeID);
            localStorage.setItem('role', data.role);
            //localStorage.setItem('managerID', data.managerID);
            console.log("set username and role");

    } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
    }
    console.log(getEmployeeID, getPassword, role);
};

return (
    loggedIn ? (
        <WelcomeLoggedInUser />
    ) : (

   <div className="login-container">
       <form onSubmit={getCredentials}>
           <div className="login-container">
               <label htmlFor="employeeID">Employee ID:</label>
               <input type="text" name="employeeID" id="employeeID" placeholder="Enter Employee ID" />
           </div>
           <div className="login-container">
               <label htmlFor="password">Password:</label>
               <input type="password" name="password" id="password" placeholder="Enter Password" />
           </div>
           <button type="submit">Login</button>
        <div className="error-message">
                      {error && <span>{error}</span>}
                </div>
       </form>

   </div>

    )
);
};