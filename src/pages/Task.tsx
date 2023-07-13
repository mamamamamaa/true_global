import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks.ts";
import { getTasks } from "../redux/task/operations.ts";
import { TasksList } from "../components/Task/TasksList.tsx";
import { SmthWentWrong } from "../components/SmthWentWrong.tsx";
import { Box, Button } from "@mui/material";

const Task: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) void dispatch(getTasks(+categoryId));
  }, []);

  return (
    <>
      {categoryId ? (
        <>
          <Box marginTop={"2rem"} textAlign={"right"}>
            <Button type="button" color="primary">
              <Link to={`/${categoryId}/create_task`}>Create task</Link>
            </Button>
          </Box>
          <TasksList />
        </>
      ) : (
        <SmthWentWrong />
      )}
    </>
  );
};

export default Task;
