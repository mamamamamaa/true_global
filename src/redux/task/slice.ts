import { createSlice } from "@reduxjs/toolkit";
import { TaskInitialState } from "../../types/task.ts";

const initialState: TaskInitialState = {
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
