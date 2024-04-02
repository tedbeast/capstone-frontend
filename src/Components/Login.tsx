import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WelcomeLoggedInUser } from "../Pages/WelcomeLoggedInUser";

interface LoginProps {
  onLogin: () => void;
}
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const getCredentials = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let getEmployeeID = (
      document.getElementById("employeeID") as HTMLInputElement
    ).value;
    let getPassword = (document.getElementById("password") as HTMLInputElement)
      .value;
    let role = localStorage.getItem("role");

    try {
      const response = await fetch("http://localhost:9004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          employeeID: getEmployeeID,
          password: getPassword,
        }),
      });
      console.log("reached response block");
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful: ", data);
        setLoggedIn(true);
        onLogin(); //Call the onLogin function passed as prop
        navigate("/welcome");
        localStorage.setItem("username", getEmployeeID);
        localStorage.setItem("role", data.role);
      } else {
        console.log("Response: ", response);
        console.error("Login failed: ", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(getEmployeeID, getPassword, role);
  };

  return loggedIn ? (
    <WelcomeLoggedInUser />
  ) : (
    <form onSubmit={getCredentials}>
      <div>
        <label>Employee ID: </label>
        <input
          type="text"
          name="employeeID"
          placeholder="Enter Employee ID"
          id="employeeID"
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
