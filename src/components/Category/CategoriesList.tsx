import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { Category } from "../../types/category.ts";
import { CategoryCard } from "./CategoryCard.tsx";
import { EditCategoryModal } from "./EditCategoryModal.tsx";

interface Props {
  categories: Category[];
}

export const CategoriesList: FC<Props> = ({ categories }) => {
  return (
    <>
      <Box>
        {categories.map((category, idx) => (
          <Fragment key={idx}>
            <CategoryCard {...category} />
          </Fragment>
        ))}
      </Box>
      <EditCategoryModal />
    </>
  );
};
