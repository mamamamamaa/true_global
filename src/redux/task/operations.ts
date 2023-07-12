import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTaskDto, Task } from "../../types/task.ts";
import { AxiosError } from "axios";
import axios from "axios";

export const getTasks = createAsyncThunk<
  Task[],
  number,
  { rejectValue: string }
>("task/getTasks", async (categoryId, thunkApi) => {
  try {
    const { data } = await axios.get<Task[]>(`/api/task/${categoryId}`);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const createTask = createAsyncThunk<
  Task,
  { dto: CreateTaskDto; categoryId: number },
  { rejectValue: string }
>("task/createTask", async ({ dto, categoryId }, thunkApi) => {
  try {
    const { data } = await axios.post<Task>(`/api/task/${categoryId}`, dto);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const updateTask = createAsyncThunk<
  Task,
  { dto: CreateTaskDto; taskId: number },
  { rejectValue: string }
>("task/updateTask", async ({ dto, taskId }, thunkApi) => {
  try {
    const { data } = await axios.patch<Task>(`/api/task/${taskId}`, dto);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const removeTask = createAsyncThunk<
  Task,
  number,
  { rejectValue: string }
>("task/removeTask", async (taskId, thunkApi) => {
  try {
    const { data } = await axios.delete<Task>(`/api/task/${taskId}`);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});
