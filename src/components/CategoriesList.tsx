import { FC, Fragment, MouseEventHandler, useState } from "react";
import { Box } from "@mui/material";
import { Category } from "../types/category.ts";
import { CategoriesCard } from "./CategoriesCard.tsx";

interface Props {
  categories: Category[];
}

export const CategoriesList: FC<Props> = ({ categories }) => {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleMenuClose();
  };

  const handleRemove = () => {
    handleMenuClose();
  };

  return (
    <Box>
      {categories.map((category, idx) => (
        <Fragment key={idx}>
          <CategoriesCard
            anchorEl={anchorEl}
            {...category}
            handleEdit={handleEdit}
            handleMenuClose={handleMenuClose}
            handleMenuOpen={handleMenuOpen}
            handleRemove={handleRemove}
          />
        </Fragment>
      ))}
    </Box>
  );
};
