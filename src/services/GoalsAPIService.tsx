
import { GoalsModel } from "../Models/GoalsModel";
import { PerformanceReview } from "../Models/PerformanceReview";

const apiBaseURL = "http://localhost:9004/"

export function getAllGoalsAPI(){
    return fetch(apiBaseURL + "performanceReview",{
        method:"GET"
    });
}


//export function getGoalsByEmployeeAPI(data:PerformanceReview["performanceReviewID"]){
export function getGoalsByEmployeeAPI(data:PerformanceReview["employee"]["employeeID"]){
    return fetch(apiBaseURL + "employee/" + data + "/performanceReview", {
        method:"GET",
        mode:"cors"
    })
}

export function postGoalsAPI(data:GoalsModel, id:PerformanceReview["employee"]["employeeID"]){
    return fetch(apiBaseURL + "employee/" + id + "/goals", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}

// get all performance reviews by managerID
export function getAllPerformanceByManagerAPI(managerID: number) {
    return fetch(apiBaseURL + "performance?managerID=" + managerID, {
        method: "GET",
        mode: "cors"
    }
    );
}

