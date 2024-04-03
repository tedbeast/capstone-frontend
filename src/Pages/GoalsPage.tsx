import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../Services/GoalsAPIService";
import { useEffect, useState } from "react";
import { EmployeePerformanceReview } from "../Components/EmployeePeformanceReview";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeeDropdown } from "../Components/PerformanceReviewGetEmployeeReview";
// import { sortAndDeduplicateDiagnostics } from "typescript";
import { AddGoal } from "../Components/AddGoal";
import { ListGoal } from "../Components/ListGoal";
import "../App.css";

export function GoalsPage() {
  const testManagerID = 1;
  const testEmpID = 1;
  //rendering depending on manager vs employee
  const currentRole = "MANAGER";
  const [roleMgr, setRoleMgr] = useState(false);
  const [dropDown, setDropDown] = useState(false); //false = does not appear

  //check what the current role is
  function checkRole(currentRole: "EMPLOYEE" | "MANAGER" | "ADMIN") {
    if (currentRole === "MANAGER") {
      setRoleMgr(true);
    }
  }

  useEffect(() => {
    //check role everytime component mounts
    checkRole(currentRole);
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMgrView = () => {
    setShowMenu(!showMenu);
    setDropDown(!dropDown);
    console.log(showMenu);
  };
  console.log(roleMgr);
  console.log(showMenu);
  //if manager: show button to toggle view & manager self peformance review
  //then, toggle view: show button, dropdown, & employee review
  //if employee: show only employee review

  return (
    <>
      {roleMgr ? (
        <div>
          <button onClick={toggleMgrView}>Switch View</button>
          {dropDown ? (
            <div className="container-perf">
              <h5>Manage Employees</h5>
              <EmployeeDropdown
                role={roleMgr}
                managerID={testEmpID}
              ></EmployeeDropdown>
            </div>
          ) : (
            <EmployeePerformanceReview
              role={false}
              employeeID={testEmpID}
              managerID={testManagerID}
            ></EmployeePerformanceReview>
          )}
        </div>
      ) : (
        <>
          <EmployeePerformanceReview
            role={roleMgr}
            employeeID={testEmpID}
            managerID={testManagerID}
          ></EmployeePerformanceReview>
        </>
      )}
    </>
  );
}