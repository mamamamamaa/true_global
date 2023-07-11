export const PRIVATE_PAGES = [{ pageName: "Categories", pathTo: "/category" }];
export const RESTRICTED_PAGES = [
  { pageName: "SignIn", pathTo: "/login" },
  { pageName: "SignUp", pathTo: "/register" },
];

export const ALL_PAGES = [...PRIVATE_PAGES, ...RESTRICTED_PAGES];

export const LOGO_TEXT = "True Global";
