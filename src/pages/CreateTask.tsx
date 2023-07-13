import { FC } from "react";
import { useParams } from "react-router-dom";
import { TaskForm } from "../components/Task/TaskForm.tsx";
import { DEFAULT_TASK_FORM_INITIAL_VALUES } from "../consts.ts";
import { useAppDispatch } from "../redux/hooks.ts";
import { CreateTaskDto } from "../types/task.ts";
import { createTask } from "../redux/task/operations.ts";
import { SmthWentWrong } from "../components/SmthWentWrong.tsx";

const CreateTask: FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useParams();

  if (!categoryId) return <SmthWentWrong />;

  const redirectTo = `/${categoryId}/tasks`;

  const handleCreateTask = (values: CreateTaskDto) =>
    void dispatch(createTask({ dto: values, categoryId: +categoryId }));

  return (
    <TaskForm
      initialValue={DEFAULT_TASK_FORM_INITIAL_VALUES}
      action={handleCreateTask}
      redirectTo={redirectTo}
      formLabel="Create task"
    />
  );
};

export default CreateTask;
