import { Employee } from "../Models/Employee";


const apiBaseURL = "http://localhost:9004/"

export function getAllEmployeesAPI(){
  return fetch(apiBaseURL+"employee",{
          method:"GET",
          mode:"cors"
      });
}
export function getEmployeeByIDAPI(employeeID:number){
  return fetch(apiBaseURL + `employee/${employeeID}`, {
      method: "GET",
      mode: "cors"
    });
  }

  export function assignManagerID(employeeID: number, data: Employee) {
    return fetch(apiBaseURL + `manager/${employeeID}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

export function updateAdminAPI(employeeID: number, data: Employee) {
    return fetch(apiBaseURL + `employee/${employeeID}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  export function deleteAdminAPI(employeeID:number){
    return fetch(apiBaseURL + `employee/${employeeID}`, {
        method: "DELETE",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
    }

  export function addAdminAPI(employee: Employee){
    return fetch(apiBaseURL + `manager/${employee?.manager?.managerID}/employee`, {
        method:"POST",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(employee)});
}

export function addManagerAPI(employee : Employee){
  return fetch(apiBaseURL+"manager", {
      method:"POST",
      mode:"cors",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(employee)});
}
