import { FC, useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useError } from "../redux/hooks.ts";

export const Toast: FC = () => {
  const error = useError();
  const [timer, setTimer] = useState<boolean>(Boolean(error));

  const handleClose = () => setTimer(false);
  const handleOpen = () => setTimer(true);

  useEffect(() => {
    if (error) {
      handleOpen();
      const timer = setTimeout(handleClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <Snackbar open={timer} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="error" color="error" onClose={handleClose}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};
