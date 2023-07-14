import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getCategories } from "../redux/category/operations.ts";
import { CategoriesList } from "../components/Category/CategoriesList.tsx";
import { selectCategories } from "../redux/category/selectors.ts";
import { Box, Button, Typography } from "@mui/material";
import { setToggleCreateModal } from "../redux/category/slice.ts";
import { CreateCategoryModal } from "../components/Category/CreateCategoryModal.tsx";
import { EmptyList } from "../components/EmptyList.tsx";

const Category: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  const handleOpenCreateCategoryModal = () =>
    dispatch(setToggleCreateModal({ isOpen: true }));

  useEffect(() => {
    if (categories.length === 0) {
      void dispatch(getCategories());
    }
  }, []);

  return (
    <>
      <Box marginTop={"2rem"} textAlign={"right"}>
        <Button
          type="button"
          color="primary"
          onClick={handleOpenCreateCategoryModal}
        >
          Create category
        </Button>
      </Box>

      {categories.length !== 0 && <CategoriesList categories={categories} />}

      {categories.length === 0 && (
        <EmptyList>You don't have any categories</EmptyList>
      )}

      <CreateCategoryModal />
    </>
  );
};

export default Category;
