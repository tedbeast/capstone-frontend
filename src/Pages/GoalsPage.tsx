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
    <EmployeePerformanceReview></EmployeePerformanceReview>
    </>
        )
};