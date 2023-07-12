import { FC } from "react";
import { Card } from "@mui/material";

import { Category } from "../types/category.ts";
import { CategoriesCardContent } from "./CategoriesCardContent.tsx";
import { CategoriesCardActions } from "./CategoriesCardActions.tsx";

interface Props extends Category {}

export const CategoriesCard: FC<Props> = ({
  date_created,
  name,
  task_count,
  id,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CategoriesCardContent
        task_count={task_count}
        date_created={date_created}
        name={name}
      />
      <CategoriesCardActions id={id} />
    </Card>
  );
};
