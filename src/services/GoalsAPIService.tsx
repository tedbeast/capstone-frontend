import { GoalsModel } from "../Models/GoalsModel";
import { PerformanceReview } from "../Models/PerformanceReview";

const apiBaseURL = "http://localhost:8080/"

export function getAllGoalsAPI(){
    return fetch(apiBaseURL + "performanceReview",{
        method:"GET"
    });
}

export function getGoalsByEmployeeAPI(data:PerformanceReview["performanceReviewID"]){
    return fetch(apiBaseURL + "employee/" + data + "/performanceReview", {
        method:"GET",
        mode:"cors"
    })
}
// export function postGoalAPI(data:GoalModel){
//     return fetch(apiBaseURL+"goal", {
//         method:"POST",
//         mode:"cors",
//         headers:{"Content-Type":"application/json"},
//         //body:JSON.stringify({name:name, id:10})
//         body:JSON.stringify(data)
//     });
//}
export function postGoalsAPI(data:GoalsModel){
    return fetch(apiBaseURL+"goal", {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        //body:JSON.stringify({name:name, id:10})
        body:JSON.stringify(data)
    })
}

// api call to list of employees by ManagerID
export function getAllEmployeeByManagerIdAPI(managerId: number){
    return fetch(apiBaseURL+"employee/"+ managerId,
    {
        method: "GET",
        mode:"cors",

    })
}
