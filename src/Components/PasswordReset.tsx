import React, { SyntheticEvent, useState } from "react";
import { Employee } from "../models/Employee";
import { getEmployeeById, putPassword } from "../Services/LoginAPIService";

//interface propsInterface {
//    data:Employee
//}

//type PublicProps = propsInterface;

export function ResetPassword (props: { data: { employeeId: any; }; }){
    const [employeeIdInput, setEmployeeIdInput] = useState<number|undefined>()
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

    const resetSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAlertMessage("");
        let id = employeeIdInput
        let pwd = passwordInput
        let validEmployee = await getEmployeeById(id)
        let validity = validEmployee.status
        if(!employeeIdInput) {
            return setAlertMessage("Employee ID cannot be blank")
        }
        if(validity == 404) {
            return setAlertMessage("Employee ID does not exist")
        }
        if(!passwordInput || !confirmPasswordInput) {
            return setAlertMessage("Password cannot be blank")
        }
        if(passwordInput !== confirmPasswordInput) {
            return setAlertMessage("Passwords must match");
        }
        let employee:Employee = {
            employeeID:id,
            password:pwd
        }
        await putPassword(employee);
    }

    return (
        <div>
            <h3>Please enter the below information to reset your password.</h3>
            {alertMessage !== "" && 
            <div style={{color: "red", paddingBottom: 10}}>
                {alertMessage}
                </div>}
            <form onSubmit={resetSubmit}>
                <div>
                <label>
                    EmployeeID
                    <div>
                        <input
                            name="employeeid"
                            type="employeeid"
                            onChange={employeeIdInputHandler}
                        />
                        </div>
                </label>
                </div>
                <div>
                <label>
                    Password
                    <div>
                        <input
                            name="password"
                            type="password"
                            onChange={passwordInputHandler}
                        />
                        </div>
                </label>
                </div>
                <div>
                <label>
                    Confirm Password
                    <div>
                        <input
                            name="confirmpassword"
                            type="password"
                            onChange={confirmPasswordInputHandler}
                        />
                        </div>
                </label>
                </div>
                <button type="submit">Reset Password</button>
            </form>
        </div>
    )

    //value={employeeIdInput}
    //value={passwordInput}
    //value={confirmPasswordInput}
}