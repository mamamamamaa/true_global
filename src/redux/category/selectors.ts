import { RootState } from "../../types/store.ts";

export const selectCategoryError = (state: RootState) => state.category.error;

export const selectCategories = (state: RootState) => state.category.categories;

export const selectCategoriesEditModal = (state: RootState) =>
  state.category.editModal;

export const selectCategoryIsLoading = (state: RootState) =>
  state.category.isLoading;
