import { FC, ReactNode } from "react";
import { Box, Modal } from "@mui/material";

interface Props {
  children: ReactNode;
  handleClose: () => void;
  isOpen: boolean;
}

export const ModalWindow: FC<Props> = ({ isOpen, handleClose, children }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          backgroundColor: "white",
          width: "50%",
          padding: 3,
          borderRadius: 10,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
