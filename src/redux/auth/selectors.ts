import { RootState } from "../../types/store.ts";

export const selectAuthAccessToken = (state: RootState) =>
  state.auth.access_token;

export const selectAuthEmail = (state: RootState) => state.auth.email;

export const selectAuthError = (state: RootState) => state.auth.error;

export const selectAuthIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
