import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WelcomeLoggedInUser } from '../Pages/WelcomeLoggedInUser';
import { useAuth } from '../Components/AuthContext';
import "./Login.css";
interface LoginProps {
onLogin: () => void;
}
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
const { loggedIn, login } = useAuth();
const [employeeID, setEmployeeID] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<string | null>(null);
const navigate = useNavigate();
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!employeeID || !password) {
        setError("Employee ID and password are required.");
        return;
    }

    try {
        const response = await fetch('http://localhost:9004/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ employeeID, password }),
        });

        if (!response.ok) {
            if (response.status === 401) {
                setError("Invalid credentials. Please check your username and password.");
            } else {
                setError("An error occurred. Please try again later.");
            }
            return;
        }

        const data = await response.json();
        console.log("Response Data: ", data);
        const token = data.token;
        if(!token){
        throw new Error('Token not found in response');
        }
        localStorage.setItem('authToken', token);
        console.log("TOKEN: ", token);
        console.log("Login successful: ", data);
        login();
        navigate('/welcome');
        localStorage.setItem('username', employeeID);
        localStorage.setItem('role', data.role);
        setError(null); // Reset error state on successful login
    } catch (error) {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
    }
};

return (
    loggedIn ? (
        <WelcomeLoggedInUser />
    ) : (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-container">
                    <label htmlFor="employeeID">Employee ID:</label>
                    <input
                        type="text"
                        name="employeeID"
                        id="employeeID"
                        placeholder="Enter Employee ID"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                    />
                </div>
                <div className="login-container">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
                <div className="error-message">
                    {error && <span>{error}</span>}
                </div>
            </form>
        </div>
    )
);

};