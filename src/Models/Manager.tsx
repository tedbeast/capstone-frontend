import { Employee } from "./Employee";

export interface Manager {
    managerID: number| null;
    employees: Employee[];
}