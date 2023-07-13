import { FC } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  FormValues,
  SignInInitialValues,
  SignUpInitialValues,
} from "../types/common.ts";

interface Props extends FormValues {
  handleSubmit: (values: SignUpInitialValues | SignInInitialValues) => void;
}

export const AuthFrom: FC<Props> = ({
  initialValues,
  validationSchema,
  inputs,
  submitButtonText,
  formLabel,
  handleSubmit,
}) => {
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
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {inputs.map(({ label, type, name }, idx) => (
              <Box key={idx} mb={2}>
                <Field
                  as={TextField}
                  label={label}
                  name={name}
                  type={type}
                  variant="outlined"
                  fullWidth
                />
                <ErrorMessage name={name} component="div" />
              </Box>
            ))}

            <Button type="submit" variant="contained" color="primary">
              {submitButtonText}
            </Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
