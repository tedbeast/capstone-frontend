import React from "react";
import { Link } from "react-router-dom";
import { Login } from "../Components/Login";
import { PasswordResetPage } from "./PasswordResetPage";

export function LoginPage() {
    const handleLogin = () => {
    console.log("User logged in.");
    };

    return(
        <>
        <Login onLogin={handleLogin}></Login>
        <a href="/passwordreset">Forgot password?</a>
        </>

    );
};