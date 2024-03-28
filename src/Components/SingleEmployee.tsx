import React from "react";
import { Employee } from "../Models/Employee";


interface PropsInterface {
    data: Employee;
}

export function SingleEmployee(props: PropsInterface) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>

            <h2>Employee ID: {props.data.employeeID}</h2>
            <p>Name: {props.data.name}</p>
            
            </div>
    );
}