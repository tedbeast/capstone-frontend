import React, { SyntheticEvent, useState } from "react";
import { getEmployeeById, postPassword } from "../Services/LoginAPIService";

export function ResetPassword (){
    const [employeeIdInput, setEmployeeIdInput] = useState<number>()
    const [passwordInput, setPasswordInput] = useState<string>("")
    const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("")
    const [alertMessage, setAlertMessage] = useState<string>("")
    
    function employeeIdInputHandler (event:SyntheticEvent){
        let idBox = event.target as HTMLInputElement;
        setEmployeeIdInput(parseInt(idBox.value));
    }
    function passwordInputHandler (event:SyntheticEvent){
        let passwordBox = event.target as HTMLInputElement;
        setPasswordInput(passwordBox.value);
    }
    function confirmPasswordInputHandler (event:SyntheticEvent){
        let confirmPasswordBox = event.target as HTMLInputElement;
        setConfirmPasswordInput(confirmPasswordBox.value);
    }

    /*
    //create function to update/display alert message from conditional checks
    function displayAlert() {
        return() => {
            if (!alertMessage) return "";
            return <div id="alert">(alertMessage)</div>;
        }
    }
    */

    function resetSubmit (event:SyntheticEvent){
        //reset alert message to blank on click of button
        setAlertMessage("");
        //get values from input fields and create variables
        let employeeId = employeeIdInput
        let password = passwordInput
        //***update with correct GET by ID API name once determined
        //check that employee ID is for a valid, existing employee
        if(getEmployeeById(employeeId) == null) {
            return setAlertMessage("Employee ID does not exist")
        }
        //check if password fields match
        if(passwordInput !== confirmPasswordInput) {
            return setAlertMessage("Passwords must match");
        }
        //if no errors, send update to back end
        postPassword(employeeId, password);
        //what do we want to have happen? return them to the login page?
    }

    return (
        <div>
            {alertMessage !== "" && 
            <span>
                {alertMessage}
                </span>}
            <form onSubmit={resetSubmit}>
                <label>
                    EmployeeID
                        <input
                            name="employeeid"
                            type="employeeid"
                            value={employeeIdInput}
                            onChange={employeeIdInputHandler}
                        />
                </label>
                <label>
                    Password
                        <input
                            name="password"
                            type="password"
                            value={passwordInput}
                            onChange={passwordInputHandler}
                        />
                </label>
                <label>
                    Confirm Password
                        <input
                            name="confirmpassword"
                            type="password"
                            value={confirmPasswordInput}
                            onChange={confirmPasswordInputHandler}
                        />
                </label>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    )
}