import { Leave } from "./Leave";
import { Manager } from "./Manager";
import { PerformanceReview } from "./PerformanceReview";
import { Roles } from "./Roles";


export interface Employee {
    employeeID: number;
    password: string;
    name: string;
    jobTitle: string;
    phoneNumber: string;
    email: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    birthDate: Date;
    anniversary: Date;
    manager: Manager;
    performanceReview: PerformanceReview[];
    leave: Leave[];
    role: Roles;
}
