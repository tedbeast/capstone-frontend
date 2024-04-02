import EmployeeLeaveTable from "./EmployeeLeaveTable";
import React, { useState, useEffect, useCallback } from "react";
import { Button, Modal, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";
import LeaveForm from "./LeaveForm";
import { Employee } from "../models/Employee";
import { Leave } from "../models/Leaves";
import {
  deleteLeaveAPI,
  getAllLeavesByEmployeeId,
} from "../services/LeavesAPI";
import { toast } from "react-toastify";
import UpdateLeaveForm from "./UpdateLeaveForm";

interface EmployeeLeaveUIProps {
  employee: Employee;
}

const EmployeeLeaveUI: React.FC<EmployeeLeaveUIProps> = ({ employee }) => {
  const [showForm, setShowForm] = useState(false);
  const [allLeaves, setAllLeaves] = useState<Leave[]>([]);
  const [leave, setLeave] = useState<Leave>();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    getAllLeavesByEmployeeId(employee.employeeID).then((data) => {
      setAllLeaves(data);
    });
  }, [showUpdateForm, showForm]);

  const handleDelete = async (id: number) => {
    const result = await deleteLeaveAPI(id);
    console.log(result);

    if (!result) {
      toast.error("Error deleting leave");
      return;
    }
    toast.success("Leave deleted successfully");
    getAllLeavesByEmployeeId(employee.employeeID).then((data) => {
      if (data.length !== 0) setAllLeaves(data);
      else setAllLeaves([]);
    });
  };

  const handleUpdate = useCallback(
    (id: number, leave: Leave) => {
      setLeave(leave);
      setShowUpdateForm(true);
    },
    [allLeaves]
  );

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={"flex-end"}
        my={4}
        mx={4}
        px={15}
      >
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={(e) => setShowForm(!showForm)}
        >
          Apply For Leave
        </Button>
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
      </Stack>

      {showUpdateForm ? (
        <Modal
          open={showUpdateForm}
          onClose={() => setShowForm(false)}
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

      <EmployeeLeaveTable
        leaves={allLeaves}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        setLeave={setLeave}
        leave={leave}
      />
    </>
  );
};

export default EmployeeLeaveUI;
