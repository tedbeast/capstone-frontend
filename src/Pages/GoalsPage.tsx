import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../Services/GoalsAPIService";
import { useEffect, useState } from "react";
import { EmployeePerformanceReview } from "../Components/EmployeePeformanceReview";
import { PerformanceReview } from "../Models/PerformanceReview";
import { EmployeeDropdown } from "../Components/PerformanceReviewGetEmployeeReview";
import { sortAndDeduplicateDiagnostics } from "typescript";
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
    //When you don't give useEffect a second parameter the logic of this function will trigger everytime the component mounts
    //check role everytime component mounts
    checkRole(currentRole);
    return () => {
      //If you return a function in the useEffect then the returning function will be called when the component unmounts.
      //check role everytime component unmounts
      // checkRole(currentRole);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);
  const toggleMgrView = () => {
    setShowMenu(!showMenu);
    setDropDown(!dropDown);
    console.log(showMenu);
  };
  console.log(roleMgr);
  console.log(showMenu);
  //if manager: show button to toggle view & my own peformance review
  //then, toggle view: show button, dropdown, & employee review

  //if employee: show only employee review

    return (
        <>
            {roleMgr ? (
                <div>
                    <button onClick={toggleMgrView}>Switch View</button>
                    {dropDown ? (
                        <div>
                            <EmployeeDropdown role={roleMgr} managerID={testEmpID}></EmployeeDropdown>
                        </div>
                    ) : (
                        <EmployeePerformanceReview role={roleMgr} employeeID={testEmpID} managerID={testManagerID}></EmployeePerformanceReview>
                    )
                    }

                </div>
            ) : (
                <p>nothing</p>
                /*<EmployeePerformanceReview role={roleMgr} employeeID={testEmpID}></EmployeePerformanceReview>*/
            )
            }
            <ListGoal></ListGoal>
        </>
    )
};