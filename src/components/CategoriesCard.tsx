import { FC, MouseEventHandler } from "react";
import { Card } from "@mui/material";

import { Category } from "../types/category.ts";
import { CategoriesCardContent } from "./CategoriesCardContent.tsx";
import { CategoriesCardActions } from "./CategoriesCardActions.tsx";

interface Props extends Category {
  anchorEl: (EventTarget & HTMLButtonElement) | null;
  handleMenuOpen: MouseEventHandler<HTMLButtonElement>;
  handleMenuClose: () => void;
  handleRemove: () => void;
  handleEdit: () => void;
}

export const CategoriesCard: FC<Props> = ({
  date_created,
  name,
  task_count,
  ...actionData
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
      <CategoriesCardActions {...actionData} />
    </Card>
  );
};
