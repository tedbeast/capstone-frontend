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
  function getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  const testManagerID = getItem<string>('managerID');
  const testEmpID = getItem<string>('username');
  let managerIDint = 0;
  let employeeIDint = 0;
  if (testManagerID) {
    managerIDint = parseInt(testManagerID, 10);
  }  
  
  if (testEmpID) {
    employeeIDint = parseInt(testEmpID, 10);
  }

  //rendering depending on manager vs employee
  const testCurrentRole = localStorage.getItem('role');
  let currentRole = "";
  if (testCurrentRole) {
    currentRole = testCurrentRole;
  }  
  const [roleMgr, setRoleMgr] = useState(false);
  const [dropDown, setDropDown] = useState(false); //false = does not appear

  //check what the current role is
  function checkRole(currentRole: string) {
    if (currentRole === "MANAGER") {
      setRoleMgr(true);
      employeeIDint = managerIDint
    }
  }
  
  useEffect(() => {
    //check role everytime component mounts
    checkRole(currentRole);
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMgrView = () => {
    if (!showMenu) {
      document.getElementById("managerswitchview")!.innerText = "Switch to Self-Appraisal";
    } else {
      document.getElementById("managerswitchview")!.innerText = "Switch to Manage Employees";
    }
    setShowMenu(!showMenu);
    setDropDown(!dropDown);
  };

  //if manager: show button to toggle view & manager self peformance review
  //then, toggle view: show button, dropdown, & employee review
  //if employee: show only employee review

  return (
    <>
      {roleMgr ? (
        <div>
          <button id="managerswitchview" onClick={toggleMgrView}>Switch to Manage Employees</button>
          {dropDown ? (
            <div className="container-perf">
              <h5>Manage Employees</h5>
              <EmployeeDropdown
                role={roleMgr}
                managerID={managerIDint}
              ></EmployeeDropdown>
            </div>
          ) : (
            <EmployeePerformanceReview
              role={false}
              employeeID={employeeIDint}
              managerID={managerIDint}
            ></EmployeePerformanceReview>
          )}
        </div>
      ) : (
        <>
          <EmployeePerformanceReview
            role={roleMgr}
            employeeID={employeeIDint}
            managerID={managerIDint}
          ></EmployeePerformanceReview>
        </>
      )}
    </>
  );
}