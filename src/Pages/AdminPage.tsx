import React from "react";
import UpdateAdmin from "../Components/UpdateAdmin";
import AddAdmin from "../Components/AddAdmin";
import AddManager from "../Components/AddManager";
import { EmployeeList } from "../Components/EmployeeList";
import DeleteEmployee from "../Components/DeleteEmployee";
export function AdminPage(){
    return (<>
    <AddAdmin></AddAdmin>
    <UpdateAdmin></UpdateAdmin>
    <AddManager></AddManager>
    <DeleteEmployee></DeleteEmployee>
    <EmployeeList></EmployeeList>
    </>)
}