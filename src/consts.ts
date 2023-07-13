import { FormValues, Routes } from "./types/common.ts";
import * as Yup from "yup";
import { CreateTaskDto } from "./types/task.ts";

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
      .min(6, "Password must be at least 8 characters")
      .max(30, "Maximum password length 30 characters"),
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

export const LOGIN_FORM_VALUES: FormValues = {
  initialValues: {
    email: "",
    password: "",
  },
  submitButtonText: "Login",
  formLabel: "Login Form",
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 8 characters")
      .max(30, "Maximum password length 30 characters"),
  }),
  inputs: [
    { label: "Email", name: "email", type: "text" },
    { label: "Password", name: "password", type: "password" },
  ],
};

export const DEFAULT_TASK_FORM_INITIAL_VALUES: CreateTaskDto = {
  name: "",
  description: "",
  date_start: "",
  date_end: "",
};
