import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectCreateCategoryModal } from "../../redux/category/selectors.ts";
import { setToggleCreateModal } from "../../redux/category/slice.ts";
import { addCategory } from "../../redux/category/operations.ts";
import { Box, Button, Modal, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { AddCategoryDto } from "../../types/category.ts";

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

  console.log("here");

  const handleClose = () =>
    void dispatch(setToggleCreateModal({ isOpen: false }));

  const handleSubmit = (value: AddCategoryDto) => {
    void dispatch(addCategory(value));
    handleClose();
  };

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
        <h1>Create category</h1>
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
      </Box>
    </Modal>
  );
};
