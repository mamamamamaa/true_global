import { FC } from "react";
import { Box, Button, CardActions } from "@mui/material";
import { Task } from "../../types/task.ts";
import { WarningDialog } from "../WarningDialog.tsx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeTask } from "../../redux/task/operations.ts";
import { useWarningDialog } from "../../hooks/useWarningDialog.ts";

interface Props {
  task: Task;
}

export const TaskCardActions: FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { open, handleOpen, handleClose } = useWarningDialog();

  const handleRemove = () => {
    void dispatch(removeTask(task.id));
  };

  return (
    <>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="outlined" onClick={() => console.log(task.id)}>
            Edit
          </Button>
          <Button variant="outlined" onClick={handleOpen}>
            Remove
          </Button>
        </Box>
        <Button variant="outlined" onClick={() => console.log(task.id)}>
          Description
        </Button>
      </CardActions>
      <WarningDialog
        openModal={open}
        warningText={"Do you really want to delete this task?"}
        handleCloseModal={handleClose}
        action={handleRemove}
      />
    </>
  );
};
