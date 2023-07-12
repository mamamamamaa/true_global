import { RootState } from "../../types/store.ts";

export const selectCategoryError = (state: RootState) => state.category.error;

export const selectCategories = (state: RootState) => state.category.categories;

export const selectEditCategoryModal = (state: RootState) =>
  state.category.editCategoryModal;

export const selectCreateCategoryModal = (state: RootState) =>
  state.category.createCategoryModal;

export const selectCategoryIsLoading = (state: RootState) =>
  state.category.isLoading;
