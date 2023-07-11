import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../types/store.ts";
import { selectAuthError, selectAuthIsLoading } from "./auth/selectors.ts";
import {
  selectCategoryError,
  selectCategoryIsLoading,
} from "./category/selectors.ts";
import { selectTaskError, selectTaskIsLoading } from "./task/selectors.ts";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useError = () => {
  const authError = useAppSelector(selectAuthError);
  const categoryError = useAppSelector(selectCategoryError);
  const taskError = useAppSelector(selectTaskError);

  return authError || categoryError || taskError;
};

export const useLoading = () => {
  const authIsLoading = useAppSelector(selectAuthIsLoading);
  const categoryIsLoading = useAppSelector(selectCategoryIsLoading);
  const taskIsLoading = useAppSelector(selectTaskIsLoading);

  return authIsLoading || categoryIsLoading || taskIsLoading;
};
