
import { GoalsModel } from "../Models/GoalsModel";
import { PerformanceReview } from "../Models/PerformanceReview";

const apiBaseURL = "http://localhost:9004/"

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
    return fetch(apiBaseURL+"employee/"+ managerId,
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
    return fetch(apiBaseURL+"employee/"+{employeeID}+"/performanceReview/"+{perfReviewID}+"/managerReview",
     {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        //body:JSON.stringify({name:name, id:10})
        body:JSON.stringify(data)
    })
}


