import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_Cell,
} from "material-react-table";
import { Stack, Button } from "@mui/material";

import { Leave } from "../Models/Leaves";

interface EmployeeLeaveTableData {
  leaves: Leave[];
  handleUpdate: any;
  handleDelete: any;
  leave: Leave | undefined;
  setLeave: any;
}

const EmployeeLeaveTable: React.FC<EmployeeLeaveTableData> = ({
  leaves,
  handleUpdate,
  handleDelete,
  leave,
  setLeave,
}) => {
  const [data, setData] = useState<Leave[]>(leaves);

  useEffect(() => {
    setData(leaves);
  }, [leaves]);

  const columns: MRT_ColumnDef<Leave>[] = useMemo(
    () => [
      {
        accessorKey: "leaveName",
        header: "Leave Name",
        size: 200,
      },
      {
        accessorKey: "startDate",
        header: "Start Date",
        Cell: ({ cell }) =>
          cell.getValue()
            ? new Date(cell.getValue() as string).toLocaleDateString()
            : "",
        size: 150,
      },
      {
        accessorKey: "endDate",
        header: "End Date",
        Cell: ({ cell }) =>
          cell.getValue()
            ? new Date(cell.getValue() as string).toLocaleDateString()
            : "",
        size: 150,
      },
      {
        id: "status",
        header: "Status",
        Cell: ({ row }) => {
          const { activeFlag, acceptedFlag } = row.original;
          let status = "Pending";
          let badgeColor = activeFlag ? "blue" : acceptedFlag ? "green" : "red";

          return (
            <span
              style={{
                color: "white",
                backgroundColor: badgeColor,
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {activeFlag ? "Pending" : acceptedFlag ? "Accepted" : "Rejected"}
            </span>
          );
        },
        size: 100,
      },
      {
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => {
          return (
            <div
              style={{
                display: "flex",
              }}
            >
              <Button
                color="error"
                variant="contained"
                onClick={() => handleDelete(row.original.id)}
                style={{ marginRight: "8px" }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setLeave(row.original);
                  handleUpdate(row.original.id, row.original);
                }}
              >
                Update
              </Button>
            </div>
          );
        },
        size: 200,
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

/**
 * 
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
 * 
 */
