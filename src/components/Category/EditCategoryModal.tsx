import { FC } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";

import {
  selectCategories,
  selectEditCategoryModal,
} from "../../redux/category/selectors.ts";
import { ModalWindow } from "../ModalWindow.tsx";
import { setToggleEditModal } from "../../redux/category/slice.ts";
import { updateCategory } from "../../redux/category/operations.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const initialValues = {
  name: "",
};

export const EditCategoryModal: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, isOpen } = useAppSelector(selectEditCategoryModal);
  const categories = useAppSelector(selectCategories);

  const { name } =
    categories.find(({ id }) => id === categoryId) || initialValues;

  const handleClose = () =>
    void dispatch(setToggleEditModal({ isOpen: false, categoryId: null }));

  const handleSubmit = (values: { name: string }) => {
    if (categoryId)
      void dispatch(updateCategory({ id: categoryId, name: values.name }));
    handleClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Category name must be at least 6 characters")
      .max(30, "Maximum category name length 30 characters")
      .notOneOf([name], "Name must be different from initial value"),
  });

  return (
    <ModalWindow handleClose={handleClose} isOpen={isOpen}>
      <Typography variant="h5" mb={2}>
        Edit <b>{name}</b> category
      </Typography>
      <Formik
        initialValues={{ name }}
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
              Save
            </Button>
          </Box>
        </Form>
      </Formik>
    </ModalWindow>
  );
};
