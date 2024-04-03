import React, { useState } from "react";
import { Employee } from "../Models/Employee";

interface PropsInterface {
    data: Employee;
    
}

export function SingleEmployee(props: PropsInterface) {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const formatDate = (date: Date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h5>Employee ID: {props.data.employeeID}</h5>
            <p>Name: {props.data.name}</p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
                Password: {showPassword ? props.data.password : '********'}
                <button onClick={handleShowPassword} style={{ marginLeft: '10px' }}>
                    {showPassword ? 'Hide Password' : 'Show Password'}
                </button>
            </p>
            <p>Job Title: {props.data.jobTitle}</p>
            <p>Phone Number: {props.data.phoneNumber}</p>
            <p>Email: {props.data.email}</p>
            <p>Address Line 1: {props.data.addressLine1}</p>
            <p>Address Line 2: {props.data.addressLine2}</p>
            <p>City: {props.data.city}</p>
            <p>State: {props.data.state}</p>
            <p>Postal Code: {props.data.postalCode}</p>
            <p>Birthday: {formatDate(props.data.birthDate)}</p>
            <p>Anniversary: {formatDate(props.data.anniversary)}</p>
            {props.data.manager && <p>Manager ID: {props.data.manager.managerID}</p>}
            <p>Role: {props.data.role}</p>
            
        </div>
    );
}
