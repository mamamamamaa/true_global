import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Task, TaskState } from "../../types/task.ts";
import { createTask, getTasks, removeTask, updateTask } from "./operations.ts";

const initialState: TaskState = {
  error: null,
  isLoading: false,
  currentCategory: null,
  tasks: [],
  activeTask: null,
};

const extraTaskActions = [getTasks, createTask, updateTask, removeTask];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setCurrentCategory(state, { payload }: PayloadAction<number>) {
      state.currentCategory = payload;
    },

    setActiveTask(state, { payload }: PayloadAction<Task>) {
      state.activeTask = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getTasks.fulfilled, (state, { payload }) => {
        state.tasks = payload;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.tasks.unshift(payload);
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.map((task) =>
          task.id === payload.id ? payload : task
        );
      })
      .addCase(removeTask.fulfilled, (state, { payload }) => {
        state.tasks = state.tasks.filter(({ id }) => id !== payload.id);
      })
      .addMatcher(
        isAnyOf(...extraTaskActions.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraTaskActions.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(...extraTaskActions.map((action) => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { setCurrentCategory } = taskSlice.actions;

export default taskSlice.reducer;
