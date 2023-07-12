import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { Category } from "../types/category.ts";
import { CategoriesCard } from "./CategoriesCard.tsx";

interface Props {
  categories: Category[];
}

export const CategoriesList: FC<Props> = ({ categories }) => {
  return (
    <Box>
      {categories.map((category, idx) => (
        <Fragment key={idx}>
          <CategoriesCard {...category} />
        </Fragment>
      ))}
    </Box>
  );
};
