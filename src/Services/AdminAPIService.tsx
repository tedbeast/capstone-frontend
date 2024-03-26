import { Employee } from "../Models/Employee";


const apiBaseURL = "http://localhost:9004/"

export function updateAdminAPI(employeeID: number, data: Employee) {
    return fetch(apiBaseURL + `product/${employeeID}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  export function addAdminAPI(employee: Employee){
    return fetch(apiBaseURL + `manager/${employee}/employee`, {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(employee)});
}