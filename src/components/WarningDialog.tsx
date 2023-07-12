import { FC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

interface Props {
  openModal: boolean;
  warningText: string;
  handleCloseModal: () => void;
  action: () => void;
}

export const WarningDialog: FC<Props> = ({
  warningText,
  openModal,
  handleCloseModal,
  action,
}) => {
  return (
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <Typography variant="body1">{warningText}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal}>No</Button>
        <Button onClick={action}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};
