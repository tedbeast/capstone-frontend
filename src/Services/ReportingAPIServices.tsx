
const apiBaseURL = "http://localhost:9004/"

export function getAverageRatingPerEmployeeId(){
  return fetch(apiBaseURL+"average-rating",{
          method:"GET",
          mode:"cors"
      });
}

export function getLowRatingEmployees() {
 return fetch(apiBaseURL +"employees/lowRating", {
          method: "GET",
          mode: "cors",
      });
    }

  export function getRatingPerGoalType() {
      return fetch(apiBaseURL +"average-rating-per-goal-type", {
               method: "GET",
               mode: "cors",
           });
         }