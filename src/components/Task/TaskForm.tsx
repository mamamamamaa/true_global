import { FC } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, TextareaAutosize, TextField } from "@mui/material";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  taskName: Yup.string().required("Task name is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .required("End date is required")
    .min(
      Yup.ref("startDate"),
      "End date must be after or equal to the start date"
    ),
});

const initialValues = {
  taskName: "",
  description: "",
  startDate: null,
  endDate: null,
};

export const TaskForm: FC = () => {
  const handleSubmit = () => {};

  return (
    <div>
      <h1>Task Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              as={TextField}
              name="taskName"
              label="Task Name"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage name="taskName" component="div" />
          </div>

          <div>
            <Field
              as={TextareaAutosize}
              name="description"
              rowsMin={3}
              placeholder="Description"
            />
          </div>

          <div>
            <Field
              as={TextField}
              name="startDate"
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ErrorMessage name="startDate" component="div" />
          </div>

          <div>
            <Field
              as={TextField}
              name="endDate"
              label="End Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ErrorMessage name="endDate" component="div" />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
