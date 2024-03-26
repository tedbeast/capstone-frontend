import { GoalsModel } from "../Models/GoalsModel";

const apiBaseURL = "http://localhost:9003/"
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
