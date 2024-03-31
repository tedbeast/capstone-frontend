import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Stack } from "@mui/material";

import { Leave } from "../models/Leaves";

//nested data is ok, see accessorKeys in ColumnDef below
const initialData: Leave[] = [
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
  {
    leaveId: 1,
    leaveName: "Annual Leave",
    startDate: new Date("2023-04-10"),
    endDate: new Date("2023-04-20"),
    acceptedFlag: true,
    activeFlag: true,
    employeeID: 101,
    managerID: 201,
  },
  {
    leaveId: 2,
    leaveName: "Sick Leave",
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-18"),
    acceptedFlag: false,
    activeFlag: true,
    employeeID: 102,
    managerID: 202,
  },
];

const EmployeeLeaveTable = () => {
  const [data, setData] = useState<Leave[]>(initialData);
  const columns = useMemo<MRT_ColumnDef<Leave>[]>(
    () => [
      {
        accessorKey: "leaveName",
        header: "Leave Name",
        size: 200,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString() || "",
        size: 150,
      },
      {
        accessorKey: "endDate",
        header: "End Date",
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString() || "",
        size: 150,
      },
      {
        accessorKey: "acceptedFlag",
        header: "Status",
        Cell: ({ row, table, cell }) => {
          const accepted = cell.getValue<boolean>();
          const badgeColor = accepted ? "green" : "red";
          const badgeText = accepted ? "ACCEPTED" : "REJECTED";

          return (
            <button
              style={{
                color: "white",
                backgroundColor: badgeColor,
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                const newData = [...table.options.data];
                const rowIndex = row.index;
                newData[rowIndex] = {
                  ...newData[rowIndex],
                  acceptedFlag: !newData[rowIndex].acceptedFlag,
                };

                setData(newData);
              }}
            >
              {badgeText}
            </button>
          );
        },
        size: 100,
      },
      {
        accessorKey: "activeFlag",
        header: "Active",
        Cell: ({ row, table, cell }) => {
          const active = cell.getValue<boolean>();
          const badgeColor = active ? "green" : "red";
          const badgeText = active ? "ACTIVE" : "NOT-ACTIVE";

          return (
            <button
              style={{
                color: "white",
                backgroundColor: badgeColor,
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {badgeText}
            </button>
          );
        },
        size: 100,
      },
      {
        accessorKey: "managerID",
        header: "Manager ID",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      <Stack
        direction={"row"}
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MaterialReactTable table={table} />
      </Stack>
    </>
  );
};

export default EmployeeLeaveTable;
