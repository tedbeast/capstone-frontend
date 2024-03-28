const apiBaseURL = "http://localhost:9004/"
export function putPassword(employeeId:number|undefined, password:string) {
    return fetch(apiBaseURL+"employee"+employeeId, {
        method:"PUT",
        mode:"cors",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(password)
    });
}

export function getEmployeeById(employeeId:number|undefined) {
    return fetch(apiBaseURL+"employee"+employeeId, {
        method:"GET",
        mode:"cors",
    })
}