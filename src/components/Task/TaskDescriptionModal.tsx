import { FC } from "react";
import { ModalWindow } from "../ModalWindow.tsx";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";
import { selectActiveDescription } from "../../redux/task/selectors.ts";
import { setActiveDescription } from "../../redux/task/slice.ts";
import { Box, Divider, Typography } from "@mui/material";

export const TaskDescriptionModal: FC = () => {
  const dispatch = useAppDispatch();
  const description = useAppSelector(selectActiveDescription);

  const handleClose = () => void dispatch(setActiveDescription(null));

  return (
    <ModalWindow handleClose={handleClose} isOpen={Boolean(description)}>
      <Typography variant="h5" mb={2}>
        Task description
      </Typography>
      <Divider />
      <Box py={3}>
        <i>{description}</i>
      </Box>
    </ModalWindow>
  );
};
