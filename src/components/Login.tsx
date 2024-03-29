import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {WelcomeLoggedInUser} from '../pages/WelcomeLoggedInUser';
import {UserContext} from '../contexts/UserContext';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({onLogin}) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const getCredentials = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let getEmployeeID = (document.getElementById('employeeID') as
        HTMLInputElement).value;
    let getPassword = (document.getElementById('password') as HTMLInputElement).value;
    let role = localStorage.getItem('role');

    try {
      const response = await fetch('http://localhost:9004/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeID: getEmployeeID, password:
          getPassword
        }),
      });


      if (response.ok) {
        const data = await response.json();
        console.log("Login successful: ", data);
        console.log("loggedIn: " + loggedIn);
        setLoggedIn(true);
        console.log("loggedIn: " + loggedIn);

        onLogin(); //Call the onLogin function passed as prop

        console.log("We are about to navigate to Authenticated User page");
        navigate('/welcome');

        //set the user's info in the context
        return (
            <UserContext.Provider value ={{userId: getEmployeeID, role: data.role}}>
              <WelcomeLoggedInUser/>
            </UserContext.Provider>
        );
      } else {
        console.log('Response: ', response);
        console.error('Login failed: ', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log(getEmployeeID, getPassword, role);
  };

  return (
      loggedIn ? (
          <WelcomeLoggedInUser/>
      ) : (
          <form onSubmit={getCredentials}>
            <div>
              <label>Employee ID: </label><input type="text"
                                                 name="employeeID"
                                                 placeholder="Enter Employee ID"
                                                 id="employeeID"/>
            </div>
            <div>
              <label>Password: </label><input type="password"
                                              name="password"
                                              placeholder="Enter Password"
                                              id="password"/>
            </div>
            <button type="submit">Login</button>
          </form>
      )
  );
};