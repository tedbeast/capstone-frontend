import React from "react";
import { ResetPassword } from "../Components/PasswordReset";

export function PasswordResetPage(){
    return(
        <ResetPassword data={{
            employeeId: undefined
        }}></ResetPassword>
    )
}