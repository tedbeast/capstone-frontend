import React, { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Stack } from "@mui/material";
import { Button } from "@mui/material"; // Import MUI Button for a consistent UI

import { Leave } from "../Models/Leaves";
import {
  acceptLeave,
  getAllLeaveAPI,
  getAllLeavesByEmployeeId,
  getAllLeavesByManagerId,
  rejectLeave,
} from "../Services/LeavesAPI";
import { Employee } from "../Models/Employee";
import { toast } from "react-toastify";

interface ManagerLeaveTable {
  employee: Employee;
}

interface ManagerLeaveTableData {
  id?: number;
  leaveId?: number;
  leaveName: string;
  startDate: Date | null;
  endDate: Date | null;
  acceptedFlag: boolean;
  activeFlag: boolean;
  employeeID?: number;
  managerID?: number;
  employeeName?: string;
}

const ManagerLeaveTable: React.FC<ManagerLeaveTable> = ({ employee }) => {
  const [showForm, setShowForm] = useState(false);
  const [allLeaves, setAllLeaves] = useState<Leave[]>([]);
  const [data, setData] = useState<Leave[]>([]);

  const handleAccept = async (leaveId: number | undefined) => {
    if (leaveId != undefined) {
      try {
        await acceptLeave(leaveId); // Wait for the accept operation to complete
        toast.success("Leave accepted successfully");
        const updatedLeaves = await getAllLeavesByEmployeeId(
          employee.employeeID
        );
        setData(updatedLeaves);
      } catch (e) {
        toast.error("Error accepting leave");
      }
    }
  };

  const handleReject = async (leaveId: number | undefined) => {
    if (leaveId != undefined) {
      try {
        await rejectLeave(leaveId); // Wait for the reject operation to complete
        toast.success("Leave rejected successfully");
        const updatedLeaves = await getAllLeavesByEmployeeId(
          employee.employeeID
        ); // Fetch updated list
        setData(updatedLeaves);
      } catch (e) {
        toast.error("Error rejecting leave");
      }
    }
  };

  const columns = useMemo<MRT_ColumnDef<ManagerLeaveTableData>[]>(
    () => [
      {
        accessorKey: "employeeName",
        header: "Employee Name",
        size: 200,
      },
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
        id: "acceptedFlag",
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
              {activeFlag ? "PENDING" : acceptedFlag ? "ACCEPTED" : "REJECTED"}
            </span>
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
          const badgeText = active ? "YES" : "NOT";

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
        accessorFn: (row) => row.leaveId,
        id: "actions",
        header: "Actions",
        Cell: ({ row }) => (
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleAccept(row.original.id)}
              disabled={row.original.acceptedFlag}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleReject(row.original.id)}
            >
              Reject
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    getAllLeavesByManagerId(employee.employeeID).then((data) => {
      setData(data);
    });
  }, []);

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

export default ManagerLeaveTable;
