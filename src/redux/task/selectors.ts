import { RootState } from "../../types/store.ts";

export const selectTaskError = (state: RootState) => state.task.error;

export const selectTaskIsLoading = (state: RootState) => state.task.isLoading;

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectCurrentCategory = (state: RootState) =>
  state.task.currentCategory;
