import React, { useState, useEffect } from "react";
import { Employee } from "../Models/Employee";
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
import { getAllLeavesByEmployeeId } from "../Services/LeavesAPI";
import { Leaves } from "../Models/Leaves";
import { deleteLeaveAPI } from "../Services/LeavesAPI";
import { toast } from "react-toastify";
import UpdateLeaveForm from "./UpdateLeaveForm";

interface EmployeeLeaveTableProps {
  employee: Employee;
}

const ManagerLeaveUI: React.FC<EmployeeLeaveTableProps> = ({ employee }) => {
  const [toggleView, setToggleView] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [allLeaves, setAllLeaves] = useState<Leaves[]>([]);
  const [leave, setLeave] = useState<Leaves>();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    getAllLeavesByEmployeeId(employee.employeeID).then((data) => {
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
    setAllLeaves(allLeaves.filter((leave) => leave.Id !== id));
  };

  const handleUpdate = (id: number) => {
    setShowUpdateForm(true);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: boolean
  ) => {
    setToggleView(nextView);
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
        <ToggleButtonGroup
          value={toggleView}
          exclusive
          onChange={(event, view) => handleChange(event, view === "manager")}
        >
          <ToggleButton value="false">
            <PersonOutlineOutlined />
            Employee View
          </ToggleButton>
          <ToggleButton value="manager">
            <ManageAccountsOutlined />
            Manager View
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
            Apply Leave
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
          <LeaveForm
            employee={employee}
            setAllLeaves={setAllLeaves}
            allLeaves={allLeaves}
            setShowForm={setShowForm}
          />
        </Modal>
      ) : (
        <> </>
      )}
      {showUpdateForm ? (
        <Modal
          open={showUpdateForm}
          onClose={() => setShowUpdateForm(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UpdateLeaveForm leave={leave} setShowForm={setShowUpdateForm} />
        </Modal>
      ) : (
        <> </>
      )}
    </>
  );
};

export default ManagerLeaveUI;
