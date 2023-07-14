import { FC } from "react";
import { Box, Button, CardActions } from "@mui/material";
import { Task } from "../../types/task.ts";
import { WarningDialog } from "../WarningDialog.tsx";
import { useAppDispatch } from "../../redux/hooks.ts";
import { removeTask } from "../../redux/task/operations.ts";
import { useWarningDialog } from "../../hooks/useWarningDialog.ts";
import { Link, useParams } from "react-router-dom";
import { SmthWentWrong } from "../SmthWentWrong.tsx";
import { setActiveDescription, setActiveTask } from "../../redux/task/slice.ts";

interface Props {
  task: Task;
}

export const TaskCardActions: FC<Props> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();
  const { open, handleOpen, handleClose } = useWarningDialog();

  if (!categoryId) return <SmthWentWrong />;

  const linkToEditPage = `/${categoryId}/update_task`;

  const handleRemove = () => {
    void dispatch(removeTask(task.id));
  };

  const handleSetActiveTask = () => void dispatch(setActiveTask(task));

  const handleSetActiveDescription = () =>
    void dispatch(setActiveDescription(task.description));

  return (
    <>
      <CardActions
        sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="outlined" onClick={handleSetActiveTask}>
            <Link to={linkToEditPage}>Edit</Link>
          </Button>
          <Button variant="outlined" onClick={handleOpen}>
            Remove
          </Button>
        </Box>
        <Button variant="outlined" onClick={handleSetActiveDescription}>
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
