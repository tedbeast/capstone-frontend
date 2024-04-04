import React from "react";
import {Login} from "../Components/Login";

export function Homepage() {
    const userId = localStorage.getItem("username");
    const userRole = localStorage.getItem("role");

    return (<>
            {userId ? (
                <>
                    <h1 style={{padding: 20, textAlign: "center"}}>
                        <h1>Welcome, {userRole}!</h1>!
                    </h1>
                </>) : (
                <>
                    <h1 style={{padding: 20, textAlign: "center"}}>
                        <h1>Welcome, {userRole}!</h1></h1>
                </>
            )}
        </>
    );
}