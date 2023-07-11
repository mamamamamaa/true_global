import { FC } from "react";
import { From } from "../components/From.tsx";
import { REGISTER_FORM_VALUES } from "../consts.ts";

const Register: FC = () => {
  return <From {...REGISTER_FORM_VALUES} />;
};

export default Register;
