import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { PasswordResetPage } from "./PasswordResetPage";
import "../Components/Login.css";


export function LoginPage() {
    const handleLogin = () => {
    console.log("User logged in.");
    };

    return(
        <>
        <Login onLogin={handleLogin}></Login>
        <span id="password-reset-link"><a href="/passwordreset">Forgot password?</a></span>
        </>

    );
};