import { createSlice } from "@reduxjs/toolkit";
import { CategoryState } from "../../types/category.ts";

const initialState: CategoryState = {
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
