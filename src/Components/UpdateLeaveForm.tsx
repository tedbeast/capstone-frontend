import React, { useEffect, useState } from "react";
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
import { Leave } from "../models/Leaves";
import { postLeaveAPI, updateLeaveAPI } from "../services/LeavesAPI";
import { toast } from "react-toastify";

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface FormValues {
  id?: number;
  leaveId?: number;
  leaveName: string;
  acceptedFlag: boolean;
  activeFlag: boolean;
  employeeID?: number;
  managerID?: number;
  startDate: string; // For Formik state, use strings
  endDate: string; // For Formik state, use strings
}

//Data

const options = [
  { label: "Sick Leave", value: "Sick Leave" },
  { label: "Vacation", value: "Vacation" },
  { label: "Other", value: "Other" },
];

const validationSchema = Yup.object({
  leaveName: Yup.string().required("Leave type is required"),
  startDate: Yup.date().nullable().required("Start date is required"),
  endDate: Yup.date()
    .nullable()
    .required("End date is required")
    .min(Yup.ref("startDate"), "End date can't be before start date"),
});

interface UpdateLeaveFormProps {
  leave: Leave | undefined;
}

const UpdateLeaveForm: React.FC<UpdateLeaveFormProps> = ({ leave }) => {
  console.log(leave);
  const formatDate = (date: Date | null | undefined): string =>
    date ? new Date(date).toISOString().split("T")[0] : "";
  const [initialValues, setInitialValues] = useState<FormValues>({
    leaveId: leave?.id,
    leaveName: leave?.leaveName || "",
    startDate: formatDate(leave?.startDate), // Use the adjusted formatDate function
    endDate: formatDate(leave?.endDate), // Use the adjusted formatDate function
    acceptedFlag: leave?.acceptedFlag ?? false,
    activeFlag: leave?.activeFlag ?? true,
    employeeID: leave?.employeeID,
    managerID: leave?.managerID,
  });

  const options = [
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Vacation", value: "Vacation" },
    { label: "Other", value: "Other" },
  ];

  const [otherLeaveType, setOtherLeaveType] = React.useState(
    leave?.leaveName && !options.find((o) => o.value === leave.leaveName)
      ? leave.leaveName
      : ""
  );

  useEffect(() => {
    if (leave?.leaveName && !options.find((o) => o.value === leave.leaveName)) {
      console.log(leave.leaveName);
      setInitialValues({ ...initialValues, leaveName: "Other" });
      setOtherLeaveType(leave.leaveName);
    }
    console.log(otherLeaveType);
  }, [leave]);

  const handleSubmit = async (values: any) => {
    if (otherLeaveType == "") values.leaveName = values.leaveName;
    else values.leaveName = otherLeaveType;
    console.log("Update Code: " + values.id);
    console.log("Update Code: " + values.leaveId);
    console.log(values);
    console.log(otherLeaveType);
    try {
      values.leaveId = leave?.id;
      console.log(values);
      console.log(await updateLeaveAPI(values));

      toast.success("Leave request updated successfully");
    } catch (error) {
      toast.error("Failed to update leave request");
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
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
                          value={values.leaveName}
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
                          value={otherLeaveType}
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

export default UpdateLeaveForm;
