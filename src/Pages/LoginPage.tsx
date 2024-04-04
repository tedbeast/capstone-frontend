import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { PasswordResetPage } from "./PasswordResetPage";
import { AuthProvider, useAuth } from '../Components/AuthContext';
import "../Components/Login.css";


export function LoginPage() {
    const { login } = useAuth();

//     const handleLogin = () => {
//     console.log("User logged in.");
//     };

    return(
        <>
        <Login onLogin={ login }></Login>
        <span id="password-reset-link"><a href="/passwordreset">Forgot password?</a></span>
        </>
    );
};