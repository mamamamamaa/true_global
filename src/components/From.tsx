import { FC } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormValues } from "../types/common.ts";

export const From: FC<FormValues> = ({
  initialValues,
  validationSchema,
  inputs,
  submitButtonText,
  formLabel,
}) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box p={5} border="2px solid #f5f5f5" width="50%" borderRadius="10px">
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
