import React, { useState } from 'react';
import { Login } from "../components/Login";

export function WelcomeLoggedInUser() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
            {isLoggedIn ? (
                <>
                    <h1>Welcome user!</h1>
                    {/* Any other content for the welcome page */}
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );
}