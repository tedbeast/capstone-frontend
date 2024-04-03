import React from "react";
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from "@material-ui/core";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { Leaves } from "../Models/Leaves";
import { postLeaveAPI } from "../Services/LeavesAPI";
import { toast } from "react-toastify";
import { Employee } from "../Models/Employee";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

//Data
const initialValues: Leaves = {
  leaveName: "",
  startDate: null,
  endDate: null,
  acceptedFlag: false,
  activeFlag: true,
  employeeID: undefined,
  managerID: undefined,
};

const options = [
  { label: "Sick Leave", value: "Sick Leave" },
  { label: "Vacation", value: "Vacation" },
  { label: "Other", value: "Other" },
];

const today = new Date(Date.now());
today.setHours(0, 0, 0, 0);

const validationSchema = Yup.object({
  leaveName: Yup.string().required("Leave type is required"),
  startDate: Yup.date()
    .nullable()
    .required("Start date is required")
    .min(today, "Start date can't be before today"),
  endDate: Yup.date()
    .nullable()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date can't be before start date"),
});

interface LeaveFormProps {
  employee: Employee;
  setAllLeaves: any;
  allLeaves: Leaves[];
  setShowForm: any;
}

const LeaveForm: React.FC<LeaveFormProps> = ({
  employee,
  setAllLeaves,
  allLeaves,
  setShowForm,
}) => {
  const [otherLeaveType, setOtherLeaveType] = React.useState("");
  const options = [
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Vacation", value: "Vacation" },
    { label: "Other", value: "Other" },
  ];

  const handleSubmit = async (values: any) => {
    console.log("*************************");
    console.log(values);
    console.log(employee.employeeID);
    console.log("*************************");

    if (otherLeaveType == "") values.leaveName = values.leaveName;
    else values.leaveName = otherLeaveType;

    const response = await postLeaveAPI(values, employee.employeeID);
    if (response) {
      setAllLeaves([...allLeaves, values]);
      setShowForm(false);
      toast.success("Leave Requested Successfully");
    } else {
      toast.error("Error Requesting Leave");
    }
  };

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title="Leave Request Form" />
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                handleSubmit(values);
                setSubmitting(false);
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel>Leave Type</InputLabel>
                        <Select
                          name="leaveName"
                          label="Leave Type"
                          onChange={(e: any) => {
                            setFieldValue("leaveName", e.target.value);
                            setOtherLeaveType("");
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>

                    {values.leaveName === "Other" && (
                      <Grid item xs={12}>
                        <Field
                          component={TextField}
                          name="otherLeaveType" // Make sure to handle this field appropriately in your form submission logic
                          label="Specify Leave Type"
                          fullWidth
                          variant="outlined"
                          onChange={(e: any) => {
                            setOtherLeaveType(e.target.value);
                          }}
                        />
                      </Grid>
                    )}

                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        type="date"
                        name="startDate"
                        label="Start Date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Field
                        component={TextField}
                        type="date"
                        name="endDate"
                        label="End Date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <CardActions>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </CardActions>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LeaveForm;
