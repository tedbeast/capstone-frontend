import { Employee } from "./Employee";

export interface Manager {
    managerID: number;
    employees: Employee[];
}