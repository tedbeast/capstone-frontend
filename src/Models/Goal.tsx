
import React from "react";
import { Employee } from "./Employee";

export interface Goal {
    goalID: number;
    goalType: string;
    goalDescription: string;
    employeeComments: string;
    weight: number;
}

