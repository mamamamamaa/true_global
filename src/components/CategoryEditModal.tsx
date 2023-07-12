import { FC } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import {
  selectCategories,
  selectCategoriesEditModal,
} from "../redux/category/selectors.ts";
import { setCloseEditModal } from "../redux/category/slice.ts";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { updateCategory } from "../redux/category/operations.ts";

const initialValues = {
  name: "",
};

export const CategoryEditModal: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, isOpen } = useAppSelector(selectCategoriesEditModal);
  const categories = useAppSelector(selectCategories);

  const { name } =
    categories.find(({ id }) => id === categoryId) || initialValues;

  const handleClose = () => void dispatch(setCloseEditModal());

  const handleSubmit = (values: { name: string }) => {
    if (categoryId)
      void dispatch(updateCategory({ id: categoryId, name: values.name }));
    handleClose();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().notOneOf(
      [name],
      "Name must be different from initial value"
    ),
  });

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          backgroundColor: "white",
          width: "50%",
          padding: 3,
          borderRadius: 10,
        }}
      >
        <h1>Form Example</h1>
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
      </Box>
    </Modal>
  );
};
