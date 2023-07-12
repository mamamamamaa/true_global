import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { CategoryState } from "../../types/category.ts";
import {
  addCategory,
  removeCategory,
  updateCategory,
  getCategories,
} from "./operations.ts";

const initialState: CategoryState = {
  error: null,
  isLoading: false,
  categories: [],
};

const extraCategoryAction = [
  addCategory,
  removeCategory,
  updateCategory,
  getCategories,
];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addCategory.fulfilled, (state, { payload }) => {
        state.categories.unshift(payload);
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(updateCategory.fulfilled, (state, { payload }) => {
        state.categories = state.categories.map((category) =>
          category.id === payload.id ? payload : category
        );
      })
      .addCase(removeCategory.fulfilled, (state, { payload }) => {
        state.categories = state.categories.filter(
          ({ id }) => id !== payload.id
        );
      })
      .addMatcher(
        isAnyOf(...extraCategoryAction.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraCategoryAction.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(...extraCategoryAction.map((action) => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
