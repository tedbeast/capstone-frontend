import React, {useState} from "react";
import {Login} from "../components/Login";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../contexts/UserContext";

export function WelcomeLoggedInUser() {
  // const userId = localStorage.getItem("username");
  // const userRole = localStorage.getItem("role");
  const {userId, role} = React.useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!userId);
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
              <h1>Welcome, {role}!</h1> {/* Display the user's role */}
              {/* Any other content for the welcome page */}
              <button onClick={handleLogOut}> Log Out</button>
            </>
        ) : (
            <Login onLogin={handleLogin}/>
        )}
      </>
  );
}
