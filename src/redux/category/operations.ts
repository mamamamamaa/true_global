import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../types/category.ts";
import axios, { AxiosError } from "axios";

export const getCategories = createAsyncThunk<
  Category[],
  undefined,
  { rejectValue: string }
>("category/getCategory", async (_, thunkApi) => {
  try {
    const { data } = await axios.get<Category[]>("/api/category");

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const addCategory = createAsyncThunk<
  Category[],
  undefined,
  { rejectValue: string }
>("category/getCategory", async (_, thunkApi) => {
  try {
    const { data } = await axios.get<Category[]>("/api/category");

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});
