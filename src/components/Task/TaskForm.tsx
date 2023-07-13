import { FC } from "react";
import { DatePicker } from "@mui/x-date-pickers";
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
              label="Task name"
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
              fullWidth
            />
            <ErrorMessage name="description" component="div" />
          </div>

          <div>
            <Field
              component={DatePicker}
              name="startDate"
              label="Start date"
              inputVariant="outlined"
              fullWidth
            />
            <ErrorMessage name="startDate" component="div" />
          </div>

          <div>
            <Field
              component={DatePicker}
              name="endDate"
              label="End date"
              inputVariant="outlined"
              format="dd.MM.yyyy"
              fullWidth
            />
            <ErrorMessage name="endDate" component="div" />
          </div>

          <Button type="submit" variant="contained" color="primary">
            Create task
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
