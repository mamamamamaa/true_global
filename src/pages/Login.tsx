import { FC } from "react";
import { From } from "../components/From.tsx";
import { LOGIN_FORM_VALUES } from "../consts.ts";

const Login: FC = () => {
  return <From {...LOGIN_FORM_VALUES} />;
};
export default Login;
