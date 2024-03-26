import React from "react";
import { Login } from "../components/Login";

export function LoginPage() {
    const handleLogin = () =>{
    console.log("User logged in.");
    };

    return(
        <>
        <Login onLogin={handleLogin}></Login>

        </>

    );
};