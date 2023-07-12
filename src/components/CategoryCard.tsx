import { FC } from "react";
import { Card } from "@mui/material";

import { Category } from "../types/category.ts";
import { CategoryCardContent } from "./CategoryCardContent.tsx";
import { CategoryCardActions } from "./CategoryCardActions.tsx";

interface Props extends Category {}

export const CategoryCard: FC<Props> = ({
  date_created,
  name,
  task_count,
  id,
}) => {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CategoryCardContent
          task_count={task_count}
          date_created={date_created}
          name={name}
        />
        <CategoryCardActions id={id} />
      </Card>
    </>
  );
};
