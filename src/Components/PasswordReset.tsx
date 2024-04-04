import React, { SyntheticEvent, useState } from "react";
import { Employee } from "../Models/Employee";
import { getEmployeeById, putPassword } from "../Services/LoginAPIService";

export function ResetPassword(props: { data: { employeeId: any } }) {
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const [employeeIdInput, setEmployeeIdInput] = useState<number | undefined>();
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");

  const [alertMessage, setAlertMessage] = useState<string>("");

  function employeeIdInputHandler(event: SyntheticEvent) {
    let idBox = event.target as HTMLInputElement;
    setEmployeeIdInput(parseInt(idBox.value));
  }
  function passwordInputHandler(event: SyntheticEvent) {
    let passwordBox = event.target as HTMLInputElement;
    setPasswordInput(passwordBox.value);
  }
  function confirmPasswordInputHandler(event: SyntheticEvent) {
    let confirmPasswordBox = event.target as HTMLInputElement;
    setConfirmPasswordInput(confirmPasswordBox.value);
  }

  const resetSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAlertMessage("");
    let id = employeeIdInput;
    let pwd = passwordInput;
    let response = await getEmployeeById(id);
    let validity = response.status;
    if (!employeeIdInput) {
      return setAlertMessage("Employee ID cannot be blank.");
    }
    if (validity === 404) {
      return setAlertMessage("Employee ID does not exist.");
    }
    if (!passwordInput || !confirmPasswordInput) {
      return setAlertMessage("Password cannot be blank.");
    }
    if (passwordInput !== confirmPasswordInput) {
      return setAlertMessage("Passwords must match.");
    }

    let data = await response.json();
    let employee: Employee = data;
    employee.password = pwd;
    console.log(employee);

    // TODO: Get error message from response body
    let pwdApiCallResponse = await putPassword(employee);
    let pwdStatus = pwdApiCallResponse.status;

    if (pwdStatus === 400) {
      return setAlertMessage(
        "New password cannot be the same as the current password."
      );
    }
    if (pwdStatus === 200) {
      setShowForm(false);
      setShowSuccess(true);
    }
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={resetSubmit}>
          <h3>Please enter the below information to reset your password.</h3>
          {alertMessage !== "" && (
            <div style={{ color: "red", paddingBottom: 10 }}>
              {alertMessage}
            </div>
          )}
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
      )}
      {showSuccess && (
        <>
          <div style={{ fontSize: 20, paddingTop: 10, paddingBottom: 5 }}>
            Password successfully updated!
          </div>
          <div style={{ paddingBottom: 10 }}>
            Please return to the Login Page and log in.
          </div>
          <a href="/login">Return to login</a>
        </>
      )}
    </div>
  );
}
