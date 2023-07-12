import { FC } from "react";
import { useParams } from "react-router-dom";
import { TaskForm } from "../components/Task/TaskForm.tsx";

const Task: FC = () => {
  const { categoryId } = useParams();
  console.log("here");
  return (
    <>
      {categoryId}
      <TaskForm />
    </>
  );
};

export default Task;
