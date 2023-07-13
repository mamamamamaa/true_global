import { FC } from "react";
import { Card } from "@mui/material";

import { Category } from "../../types/category.ts";
import { CategoryCardContent } from "./CategoryCardContent.tsx";
import { CategoryCardActions } from "./CategoryCardActions.tsx";

interface Props {
  category: Category;
}

export const CategoryCard: FC<Props> = ({ category }) => {
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
        <CategoryCardContent {...category} />
        <CategoryCardActions category={category} />
      </Card>
    </>
  );
};
