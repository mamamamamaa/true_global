import { FC } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Box, Button, TextField, Typography } from "@mui/material";

import { selectEditCategoryModal } from "../../redux/category/selectors.ts";
import { ModalWindow } from "../ModalWindow.tsx";
import { setToggleEditModal } from "../../redux/category/slice.ts";
import { updateCategory } from "../../redux/category/operations.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

export const EditCategoryModal: FC = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectEditCategoryModal);

  const handleClose = () =>
    void dispatch(setToggleEditModal({ category: null }));

  const handleSubmit = (values: { name: string }) => {
    if (category?.id)
      void dispatch(updateCategory({ id: category?.id, name: values.name }));
    handleClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Category name must be at least 6 characters")
      .max(30, "Maximum category name length 30 characters")
      .notOneOf([category?.name], "Name must be different from initial value"),
  });

  return (
    <ModalWindow handleClose={handleClose} isOpen={Boolean(category?.id)}>
      <Typography variant="h5" mb={2}>
        Edit <b>{category?.name}</b> category
      </Typography>
      <Formik
        initialValues={{ name: category?.name || "" }}
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
