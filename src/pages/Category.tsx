import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { getCategories } from "../redux/category/operations.ts";
import { CategoriesList } from "../components/CategoriesList.tsx";
import { selectCategories } from "../redux/category/selectors.ts";

const Category: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);

  useEffect(() => {
    if (categories.length === 0) {
      void dispatch(getCategories());
    }
  }, []);

  return <>{categories && <CategoriesList categories={categories} />}</>;
};

export default Category;
