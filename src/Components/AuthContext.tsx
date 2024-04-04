// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
const AuthContext = createContext({} as AuthContextType);
interface AuthContextType {
loggedIn: boolean;
login: () => void;
logout: () => void;
}

console.log("Starting Auth...");
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
    // Check if there is an authentication token in local storage
    const authToken = localStorage.getItem('authToken');
    console.log("HERE: " + authToken);
//     if (authToken) {
//         setLoggedIn(true); // User is logged in if token exists
//         console.log("Auth token: "+ authToken);
//     }
//     else{
//         setLoggedIn(false);
//     }
}, []);

const login = () => {
    setLoggedIn(true);
    // Store authentication token in local storage upon successful login
    localStorage.setItem('authToken', 'yourAuthToken');
};

const logout = () => {
    setLoggedIn(false);
    // Remove authentication token from local storage upon logout
    localStorage.removeItem('authToken');
};

return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
        {children}
    </AuthContext.Provider>
);

};

export const useAuth = () => useContext(AuthContext);

