import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getTasks } from "../redux/task/operations.ts";
import { TasksList } from "../components/Task/TasksList.tsx";
import { SmthWentWrong } from "../components/SmthWentWrong.tsx";
import { Box, Button } from "@mui/material";
import { selectTasks } from "../redux/task/selectors.ts";
import { EmptyList } from "../components/EmptyList.tsx";

const Task: FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) void dispatch(getTasks(+categoryId));
  }, []);

  return (
    <>
      {categoryId && (
        <>
          <Box marginTop={"2rem"} textAlign={"right"}>
            <Button type="button" color="primary">
              <Link to={`/${categoryId}/create_task`}>Create task</Link>
            </Button>
          </Box>
          {tasks.length !== 0 && <TasksList />}

          {tasks.length === 0 && (
            <EmptyList>You don't have any tasks</EmptyList>
          )}
        </>
      )}
      {!categoryId && <SmthWentWrong />}
    </>
  );
};

export default Task;
