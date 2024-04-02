import { Employee } from "../Models/Employee";

const apiBaseURL = "http://localhost:9004/"

export function postPassword(employeeId:number|undefined, password:string) {
  return fetch(apiBaseURL+"employee"+employeeId, {
    method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(password)
  });
}

export function putPassword(employee:Employee) {
    return fetch(apiBaseURL+"reset", {
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(employee)  });
}

export function getEmployeeById(employeeId:number|undefined) {
    return fetch(apiBaseURL+"employee/"+employeeId, {
        method:"GET",
        mode:"cors",
    })
}