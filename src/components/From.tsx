import { FC } from "react";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const From: FC = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box p={5} border="2px solid #f5f5f5" width="50%" borderRadius="10px">
        <Typography variant="h6" gutterBottom>
          Registration Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box mb={2}>
              <Field
                as={TextField}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component="div" />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="password" component="div" />
            </Box>
            <Box mb={2}>
              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
              />
              n
              <ErrorMessage name="confirmPassword" component="div" />
            </Box>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
