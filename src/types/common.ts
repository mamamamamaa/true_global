export type Routes = { pageName: string; pathTo: string; isPrivate: boolean }[];

export interface FormValues {
  formLabel: string;
  validationSchema: unknown;
  initialValues: SignInInitialValues | SignUpInitialValues;
  submitButtonText: string;
  inputs: InputValues[];
}

export interface SignInInitialValues {
  email: string;
  password: string;
}

export interface SignUpInitialValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface InputValues {
  label: string;
  name: string;
  type: string;
}
