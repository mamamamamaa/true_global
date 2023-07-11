import { createSlice } from "@reduxjs/toolkit";
import { TaskState } from "../../types/task.ts";

const initialState: TaskState = {
  error: null,
  isLoading: false,
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
