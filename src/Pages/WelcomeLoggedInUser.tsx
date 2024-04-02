import React, { useState } from "react";
import { Login } from "../Components/Login";
import { useNavigate } from "react-router-dom";
export function WelcomeLoggedInUser() {
  const userId = localStorage.getItem("username");
  const userRole = localStorage.getItem("role");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogOut = () => {
    console.log("User logged out.");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      {userId ? (
        <>
          <h1>Welcome, {userRole}!</h1> {/* Display the user's role */}
          {/* Any other content for the welcome page */}
          <button onClick={handleLogOut}> Log Out</button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
