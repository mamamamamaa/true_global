import { FC } from "react";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { ModalWindow } from "../ModalWindow.tsx";
import { AddCategoryDto } from "../../types/category.ts";
import { addCategory } from "../../redux/category/operations.ts";
import { setToggleCreateModal } from "../../redux/category/slice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectCreateCategoryModal } from "../../redux/category/selectors.ts";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Category name must be at least 6 characters")
    .max(30, "Maximum category name length 30 characters")
    .required("Name is required"),
});

const initialState: AddCategoryDto = {
  name: "",
};

export const CreateCategoryModal: FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(selectCreateCategoryModal);

  const handleClose = () =>
    void dispatch(setToggleCreateModal({ isOpen: false }));

  const handleSubmit = (value: AddCategoryDto) => {
    void dispatch(addCategory(value));
    handleClose();
  };

  return (
    <ModalWindow handleClose={handleClose} isOpen={isOpen}>
      <Typography variant="h5" mb={2}>
        Create category
      </Typography>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            as={TextField}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="name" component="div" />

          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Button
              type="button"
              onClick={handleClose}
              variant="contained"
              color="info"
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </Form>
      </Formik>
    </ModalWindow>
  );
};
