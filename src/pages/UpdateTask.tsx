import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { useParams } from "react-router-dom";
import { SmthWentWrong } from "../components/SmthWentWrong.tsx";
import { CreateTaskDto } from "../types/task.ts";
import { updateTask } from "../redux/task/operations.ts";
import { TaskForm } from "../components/Task/TaskForm.tsx";
import { selectActiveTask } from "../redux/task/selectors.ts";

const UpdateTask: FC = () => {
  const dispatch = useAppDispatch();
  const task = useAppSelector(selectActiveTask);
  const { categoryId } = useParams();

  if (!categoryId || !task) return <SmthWentWrong />;

  const { id, ...initialFormValues } = task;

  const redirectTo = `/${categoryId}/tasks`;

  const handleCreateTask = (values: CreateTaskDto) =>
    void dispatch(updateTask({ dto: values, taskId: id }));

  return (
    <TaskForm
      initialValue={initialFormValues}
      action={handleCreateTask}
      redirectTo={redirectTo}
      formLabel="Update task"
    />
  );
};

export default UpdateTask;
