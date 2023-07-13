import { FC } from "react";
import { AuthFrom } from "../components/AuthFrom.tsx";
import { LOGIN_FORM_VALUES } from "../consts.ts";
import { SignInInitialValues, SignUpInitialValues } from "../types/common.ts";
import { signIn } from "../redux/auth/operations.ts";
import { useAppDispatch } from "../redux/hooks.ts";

const Login: FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = ({
    email,
    password,
  }: SignUpInitialValues | SignInInitialValues) => {
    void dispatch(signIn({ email, password }));
  };

  return <AuthFrom {...LOGIN_FORM_VALUES} handleSubmit={handleSubmit} />;
};
export default Login;
