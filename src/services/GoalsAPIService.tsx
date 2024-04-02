
import { Goal } from "../Models/Goal";
import { PerformanceReview } from "../Models/PerformanceReview";

const apiBaseURL = "http://localhost:9004/"

export function getAllGoalsAPI(){
    return fetch(apiBaseURL + "performanceReview",{
        method:"GET"
    });
}


//export function getGoalsByEmployeeAPI(data:PerformanceReview["performanceReviewID"]){
// export function getGoalsByEmployeeAPI(data:PerformanceReview["employee"]["employeeID"]){
//     return fetch(apiBaseURL + "employee/" + data + "/performanceReview", {
//         method:"GET",
//         mode:"cors"
//     })
// }

// export function postGoalsAPI(data:Goal, id:PerformanceReview["employee"]["employeeID"]){
//     return fetch(apiBaseURL + "employee/" + id + "/goals", {
//         method:"POST",
//         mode:"cors",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(data)
//     })
// }

//get performance review by employeeID
export function getPerformanceByEmployeeAPI(employeeID: number){
    return fetch(apiBaseURL + "employee/" + employeeID + "/performanceReview", {
        method:"GET",
        mode:"cors"
    })
}


//Manager Related API calls

// api call to list of employees by ManagerID
export function getAllEmployeeByManagerIdAPI(managerId: number){
    return fetch(apiBaseURL+"employee/manager/"+ managerId,
    {
        method: "GET",
        mode:"cors",

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


// update manager comments and or rating
export function updateManagerCommentsRatingAPI(employeeID: number, perfReviewID: number, data:PerformanceReview){
    return fetch(apiBaseURL+"employee/"+employeeID+"/performanceReview/"+perfReviewID+"/managerReview",
     {
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        //body:JSON.stringify({name:name, id:10})
        body:JSON.stringify(data)
    })
}


