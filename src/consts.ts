import { Routes } from "./types/common.ts";

export const PAGES: Routes = [
  { pageName: "Categories", pathTo: "/category", isPrivate: false },
  { pageName: "SignIn", pathTo: "/login", isPrivate: true },
  { pageName: "SignUp", pathTo: "/register", isPrivate: true },
];

export const LOGO_TEXT = "True Global";

export const REGISTER_FORM_VALUES = {};
