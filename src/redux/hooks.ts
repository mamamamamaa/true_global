import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../types/store.ts";
import { selectAuthError } from "./auth/selectors.ts";
import { selectCategoryError } from "./category/selectors.ts";
import { selectTaskError } from "./task/selectors.ts";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useError = () => {
  const authError = useAppSelector(selectAuthError);
  const categoryError = useAppSelector(selectCategoryError);
  const taskError = useAppSelector(selectTaskError);

  return authError || categoryError || taskError;
};
