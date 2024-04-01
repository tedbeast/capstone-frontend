import React from "react";

export interface Employee {
    //Login data
    employeeID: number|undefined,
    password: string,
    name:string,
    role:string,


    //Manager data
    employeeManagerID:number,
    // employeeManagerName:string,

    //Additional data
    email:string,
    phoneNumber:string,
    employeeAddress:string,
    employeeAnniversary:Date
}