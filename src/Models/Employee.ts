import { Roles } from "./Roles";
import { PerformanceReview } from "./PrefromanceReview";
import { Leave } from "./Leaves";
import { Manager } from "./Manager";

export interface Employee {
  employeeID: number;
  password: string | null;
  name: string;
  jobTitle: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  birthDate: Date | null;
  anniversary: Date | null;
  manager?: Manager;
  role: Roles;
}
