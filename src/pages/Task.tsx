import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks.ts";
import { getTasks } from "../redux/task/operations.ts";
import { TasksList } from "../components/Task/TasksList.tsx";

const Task: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) void dispatch(getTasks(+categoryId));
  }, []);

  return (
    <>
      <TasksList />
    </>
  );
};

export default Task;
