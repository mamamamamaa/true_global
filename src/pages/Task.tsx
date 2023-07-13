import { FC } from "react";
import { useParams } from "react-router-dom";

const Task: FC = () => {
  const { categoryId } = useParams();
  console.log("here");
  return <>{categoryId}</>;
};

export default Task;
