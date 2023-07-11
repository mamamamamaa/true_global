import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks.ts";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors.ts";

interface Props {
  component: ReactElement;
  redirectTo: string;
}

export const RestrictedRoute: FC<Props> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
