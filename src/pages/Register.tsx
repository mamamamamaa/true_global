import { FC } from "react";
import { AuthFrom } from "../components/AuthFrom.tsx";
import { REGISTER_FORM_VALUES } from "../consts.ts";
import { useAppDispatch } from "../redux/hooks.ts";
import { SignInInitialValues, SignUpInitialValues } from "../types/common.ts";
import { signUp } from "../redux/auth/operations.ts";

const Register: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = ({
    email,
    password,
  }: SignUpInitialValues | SignInInitialValues) => {
    void dispatch(signUp({ email, password }));
  };

  return <AuthFrom {...REGISTER_FORM_VALUES} handleSubmit={handleSubmit} />;
};

export default Register;
