import { FormValues, Routes } from "./types/common.ts";
import * as Yup from "yup";

export const PAGES: Routes = [
  { pageName: "Categories", pathTo: "/category", isPrivate: false },
  { pageName: "SignIn", pathTo: "/login", isPrivate: true },
  { pageName: "SignUp", pathTo: "/register", isPrivate: true },
];

export const LOGO_TEXT = "True Global";

export const REGISTER_FORM_VALUES: FormValues = {
  initialValues: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  submitButtonText: "Register",
  formLabel: "Registration Form",
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  }),
  inputs: [
    { label: "Email", name: "email", type: "text" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ],
};
