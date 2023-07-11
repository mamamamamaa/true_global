import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const Loader: FC = () => {
  return (
    <Backdrop
      sx={{ color: "blue", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress />
    </Backdrop>
  );
};
