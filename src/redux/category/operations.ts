import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Category,
  AddCategoryDto,
  UpdateCategoryDto,
} from "../../types/category.ts";
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
  Category,
  AddCategoryDto,
  { rejectValue: string }
>("category/addCategory", async (category, thunkApi) => {
  try {
    const { data } = await axios.post<Category>("/api/category", category);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const updateCategory = createAsyncThunk<
  Category,
  UpdateCategoryDto,
  { rejectValue: string }
>("category/updateCategory", async ({ name, id }, thunkApi) => {
  try {
    const { data } = await axios.patch<Category>(`/api/category/${id}`, {
      name,
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const removeCategory = createAsyncThunk<
  Category,
  number,
  { rejectValue: string }
>("category/updateCategory", async (categoryId, thunkApi) => {
  try {
    const { data } = await axios.delete<Category>(
      `/api/category/${categoryId}`
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});
