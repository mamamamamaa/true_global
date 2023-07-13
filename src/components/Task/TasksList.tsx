import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../redux/hooks.ts";
import { selectTasks } from "../../redux/task/selectors.ts";
import { TaskCard } from "./TaskCard.tsx";

export const TasksList: FC = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        justifyContent: "center",
      }}
    >
      {tasks.map((task, idx) => (
        <Fragment key={idx}>
          <TaskCard task={task} />
        </Fragment>
      ))}
    </Box>
  );
};
