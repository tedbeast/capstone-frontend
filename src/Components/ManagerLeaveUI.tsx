import React, { useState, useEffect } from "react";
import { Employee } from "../models/Employee";
import { ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import { ManageAccountsOutlined } from "@mui/icons-material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import ManagerLeaveTable from "./ManagerLeaveTable";
import EmployeeLeaveTable from "./EmployeeLeaveTable";
import { PlusOneRounded } from "@mui/icons-material";
import { Add } from "@mui/icons-material";
import LeaveForm from "./LeaveForm";
import { Modal, Box, Typography } from "@mui/material";
import { getAllLeavesByEmployeeId } from "../services/LeavesAPI";
import { Leave } from "../models/Leaves";
import { deleteLeaveAPI } from "../services/LeavesAPI";
import { toast } from "react-toastify";

interface EmployeeLeaveTableProps {
  employee: Employee;
}

const ManagerLeaveUI: React.FC<EmployeeLeaveTableProps> = ({ employee }) => {
  const [toggleView, setToggleView] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [allLeaves, setAllLeaves] = useState<Leave[]>([]);
  const [leave, setLeave] = useState<Leave>();

  useEffect(() => {
    getAllLeavesByEmployeeId(employee.employeeID).then((data) => {
      console.log(data);
      setAllLeaves(data);
    });
  }, []);

  const handleDelete = async (id: number) => {
    const result = await deleteLeaveAPI(id);
    if (!result) {
      toast.error("Error deleting leave");
      return;
    }
    toast.success("Leave deleted successfully");
    setAllLeaves(allLeaves.filter((leave) => leave.leaveId !== id));
  };

  const handleUpdate = (id: number) => {
    setLeave(allLeaves.find((leave) => leave.leaveId === id));
  };

  const handleChange = (event: React.MouseEvent<HTMLElement>, view: string) => {
    setToggleView(view === "true");
  };

  const control = {
    value: toggleView ? "true" : "false",
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={toggleView ? "center" : "space-between"}
        my={4}
        mx={4}
        px={15}
      >
        <ToggleButtonGroup {...control}>
          <ToggleButton value="false">
            <PersonOutlineOutlined />
          </ToggleButton>
          <ToggleButton value="true">
            <ManageAccountsOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
        {toggleView ? (
          <></>
        ) : (
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={(e) => setShowForm(!showForm)}
          >
            Leave
          </Button>
        )}
      </Stack>
      {toggleView ? (
        <ManagerLeaveTable employee={employee} />
      ) : (
        <EmployeeLeaveTable
          leaves={allLeaves}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          leave={leave}
          setLeave={setLeave}
        />
      )}
      {showForm ? (
        <Modal
          open={showForm}
          onClose={() => setShowForm(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeaveForm />
        </Modal>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ManagerLeaveUI;
