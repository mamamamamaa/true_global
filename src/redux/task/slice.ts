import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../../types/task.ts";

const initialState: TaskState = {
  error: null,
  isLoading: false,
  currentCategory: null,
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setCurrentCategory(state, { payload }: PayloadAction<number>) {
      state.currentCategory = payload;
    },
  },
  extraReducers: (builder) => builder,
});

export const { setCurrentCategory } = taskSlice.actions;

export default taskSlice.reducer;
