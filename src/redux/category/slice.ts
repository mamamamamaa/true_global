import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "../../types/auth.ts";

const initialState: AuthInitialState = {
  email: null,
  accessToken: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export const {} = authSlice.actions;

export default authSlice.reducer;
