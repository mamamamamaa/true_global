import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth.ts";
import { logout, refresh, signIn, signUp } from "./operations.ts";

const initialState: AuthState = {
  email: null,
  access_token: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const extraAuthAction = [signIn, signUp, logout, refresh];

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.access_token = payload.access_token;
        state.email = payload.email;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.access_token = payload.access_token;
        state.email = payload.email;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.email = payload.email;
      })
      .addCase(logout.fulfilled, (state) => {
        state.email = null;
        state.access_token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(
        isAnyOf(...extraAuthAction.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraAuthAction.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(...extraAuthAction.map((action) => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const {} = authSlice.actions;

export default authSlice.reducer;
