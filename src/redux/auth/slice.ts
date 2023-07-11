import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth.ts";
import { logout, signIn, signUp } from "./operations.ts";

const initialState: AuthState = {
  email: null,
  accessToken: null,
  error: null,
  isLoading: false,
  isLoggedIn: false,
};

const extraAction = [signIn, signUp, logout];

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state) {
      state.accessToken = "dasdasdas";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.accessToken = payload.accessToken;
        state.email = payload.email;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.accessToken = payload.accessToken;
        state.email = payload.email;
      })
      .addCase(logout.fulfilled, (state) => {
        state.email = null;
        state.accessToken = null;
      })
      .addMatcher(
        isAnyOf(...extraAction.map((action) => action.pending)),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...extraAction.map((action) => action.fulfilled)),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(...extraAction.map((action) => action.rejected)),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
