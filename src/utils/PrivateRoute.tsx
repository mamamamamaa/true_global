import { FC, ReactElement } from "react";
import { useAppSelector } from "../redux/hooks.ts";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors.ts";
import { Navigate } from "react-router-dom";

interface Props {
  component: ReactElement;
  redirectTo: string;
}

export const PrivateRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);

  const shouldRedirect = !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
