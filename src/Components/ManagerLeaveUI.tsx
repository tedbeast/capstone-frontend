import React, { useState } from "react";
import { Employee } from "../models/Employee";
import { ToggleButtonGroup, ToggleButton, Button } from "@mui/material";
import { ManageAccountsOutlined } from "@mui/icons-material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import ManagerLeaveTable from "./ManagerLeaveTable";
import EmployeeLeaveTable from "./EmployeeLeaveTable";
import { PlusOneRounded } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

interface EmployeeLeaveTableProps {
  employee: Employee;
}

const ManagerLeaveUI: React.FC<EmployeeLeaveTableProps> = ({ employee }) => {
  const [toggleView, setToggleView] = useState(false);

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
          <Button variant="contained" startIcon={<Add />}>
            Leave
          </Button>
        )}
      </Stack>
      {toggleView ? <ManagerLeaveTable /> : <EmployeeLeaveTable />}
    </>
  );
};

export default ManagerLeaveUI;
