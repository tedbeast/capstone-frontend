import { Employee } from "../Models/Employee";


const apiBaseURL = "http://localhost:9004/"

export function getAllEmployeesAPI(){
  return fetch(apiBaseURL+"employee",{
          method:"GET",
          mode:"cors"
      });
}

export function updateAdminAPI(employeeID: number, data: Employee) {
    return fetch(apiBaseURL + `emplpyee/${employeeID}`, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  export function deleteAdminAPI(id:number){
    return fetch(apiBaseURL + `employee/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
    }

  export function addAdminAPI(employee: Employee){
    return fetch(apiBaseURL + `manager/${employee}/employee`, {
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
