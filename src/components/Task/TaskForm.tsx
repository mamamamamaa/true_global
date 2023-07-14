import { FC } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

import { CreateTaskDto } from "../../types/task.ts";

interface Props {
  initialValue: CreateTaskDto;
  action: (values: CreateTaskDto) => void;
  redirectTo: string;
  formLabel: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Task name must be at least 6 characters")
    .max(30, "Maximum task name length 30 characters")
    .required("Task name is required"),
  description: Yup.string()
    .min(1, "Description must be at least 1 characters")
    .max(500, "Maximum Description length 500 characters")
    .required("Description is required"),
  date_start: Yup.date().required("Start date is required"),
  date_end: Yup.date()
    .required("End date is required")
    .min(
      Yup.ref("date_start"),
      "End date must be after or equal to the start date"
    ),
});

export const TaskForm: FC<Props> = ({
  action,
  initialValue,
  redirectTo,
  formLabel,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (values: CreateTaskDto) => {
    action(values);
    navigate(redirectTo);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          border: "2px solid #f5f5f5",
          borderRadius: "10px",
          padding: 5,
        }}
      >
        <Typography variant="h6" gutterBottom>
          {formLabel}
        </Typography>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Box>
              <Field
                as={TextField}
                name="name"
                label="Task Name"
                variant="outlined"
                fullWidth
              />
              <Box sx={{ color: "red" }}>
                <ErrorMessage name="name" component="div" />
              </Box>
            </Box>

            <Box>
              <Field
                as={TextareaAutosize}
                name="description"
                placeholder="Description"
                style={{
                  width: "100%",
                  minHeight: "100px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  resize: "vertical",
                  fontFamily: "inherit",
                  fontSize: "inherit",
                  outline: "none",
                  "&:hover, &:focus": {
                    borderColor: "#aaa",
                  },
                }}
              />
            </Box>

            <Box>
              <Field
                as={TextField}
                name="date_start"
                label="Start Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box sx={{ color: "red" }}>
                <ErrorMessage name="date_start" component="div" />
              </Box>
            </Box>

            <Box>
              <Field
                as={TextField}
                name="date_end"
                label="End Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box sx={{ color: "red" }}>
                <ErrorMessage name="date_end" component="div" />
              </Box>
            </Box>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
