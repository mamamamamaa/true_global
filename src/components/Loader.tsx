import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useLoading } from "../redux/hooks.ts";

export const Loader: FC = () => {
  const isLoading = useLoading();

  return (
    <Backdrop
      sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress />
    </Backdrop>
  );
};
