import React from "react";
import { getAllGoalsAPI, postGoalsAPI } from "../services/GoalsAPIService";
import { useEffect, useState } from "react";
// import { AddGoal } from "../Components/AddGoal";

// import { PerformanceReviewList } from "../Components/PerformanceListByManager";
import { EmployeePerformanceReview } from "../Components/EmployeePeformanceReview";
import { PerformanceReview } from "../Models/PerformanceReview";


export function GoalsPage(){
    const testManagerID = 1;
        //rendering depending on manager vs employee
    const currentRole = 'MANAGER';
    const [roleMgr, setRoleMgr] = useState(false);

    //check what the current role is
    function checkRole(currentRole: 'EMPLOYEE' | 'MANAGER' | 'ADMIN') {
        if (currentRole === 'MANAGER') {
            setRoleMgr(true)
        }
    }

    useEffect(() => {
        //When you don't give useEffect a second parameter the logic of this function will trigger everytime the component mounts
        //check role everytime component mounts
        checkRole(currentRole);
        return () => {
            //If you return a function in the useEffect then the returning function will be called when the component unmounts.
            //check role everytime component unmounts
            checkRole(currentRole);
        }
    }, []);

    return (
    <>
    <div></div>
    {/*
        if role = Manager 
        <button> Self or AllEmployees?
        if button = Self
        <EmployeePerformanceReview>
        if button = AllEmployees
        <EmployeeDrodown>
        else <EmployeePerformanceReview>
    */}
    {/* <GoalList></GoalList> */}
    {/* <AddGoal></AddGoal> */}
    {/* <PerformanceReviewList managerIdProp={testManagerID}></PerformanceReviewList> */}
    <EmployeePerformanceReview role={roleMgr}></EmployeePerformanceReview>
    </>
        )
};