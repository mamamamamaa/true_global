import { useState } from "react";

export const useWarningDialog = () => {
  const [openWarningModal, setOpenWarningModal] = useState<boolean>(false);

  const handleOpenWarningModal = () => {
    setOpenWarningModal(true);
  };

  const handleCloseWarningModal = () => {
    setOpenWarningModal(false);
  };

  return {
    open: openWarningModal,
    handleClose: handleCloseWarningModal,
    handleOpen: handleOpenWarningModal,
  };
};
