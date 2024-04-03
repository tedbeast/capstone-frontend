import { Employee } from "./Employee";

export interface Leaves {
  Id?: number;
  leaveName: string;
  startDate: Date | null; // Allows for both date object and null value
  endDate: Date | null;
  acceptedFlag: boolean;
  activeFlag: boolean;
  employeeID?: number; // Foreign key referencing Employee entity
  managerID?: number; // Foreign key referencing Manager entity
}
