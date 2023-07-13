import { FC } from "react";
import { Task } from "../../types/task.ts";
import { Card } from "@mui/material";
import { TaskCardContent } from "./TaskCardContent.tsx";
import { TaskCardActions } from "./TaskCardActions.tsx";

interface Props {
  task: Task;
}

export const TaskCard: FC<Props> = ({ task }) => {
  return (
    <Card>
      <TaskCardContent {...task} />
      <TaskCardActions task={task} />
    </Card>
  );
};
