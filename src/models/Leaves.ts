export interface Leave {
  leaveId?: number;
  leaveName: string;
  startDate: Date | null;
  endDate: Date | null;
  acceptedFlag: boolean;
  activeFlag: boolean;
  employeeID?: number;
  managerID?: number;
}
