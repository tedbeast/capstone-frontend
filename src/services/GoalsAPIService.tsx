import { GoalsModel } from "../models/GoalsModel";

const apiBaseURL = "http://localhost:8080/"
export function getAllGoalsAPI(){
    return fetch(apiBaseURL+"goal"
    ,{
          method:"GET",
          mode:"cors"
      }
        );
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

// get all performance reviews by managerID
export function getAllPerformanceByManagerAPI(managerID: number) {
    return fetch(apiBaseURL + "performance?managerID=" + managerID, {
        method: "GET",
        mode: "cors"
    }
    );
}

