import { createSlice } from "@reduxjs/toolkit";
import { CategoryInitialState } from "../../types/category.ts";

const initialState: CategoryInitialState = {
  error: null,
  isLoading: false,
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
