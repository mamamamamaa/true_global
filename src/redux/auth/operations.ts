import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  SignIn,
  SignInResponse,
  SignUp,
  SignUpResponse,
} from "../../types/auth.ts";
import axios, { AxiosError } from "axios";

const { VITE_SERVER } = import.meta.env;

axios.defaults.baseURL = VITE_SERVER as string;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const signIn = createAsyncThunk<
  SignInResponse,
  SignIn,
  { rejectValue: string }
>("auth/signIn", async (userData, thunkApi) => {
  try {
    const { data } = await axios.post<SignInResponse>(
      "/api/auth/login",
      userData
    );

    setAuthHeader(data.accessToken);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const signUp = createAsyncThunk<
  SignUpResponse,
  SignUp,
  { rejectValue: string }
>("auth/signUp", async (userData, thunkApi) => {
  try {
    const { data } = await axios.post<SignUpResponse>(
      "/api/auth/register",
      userData
    );

    setAuthHeader(data.accessToken);

    return data;
  } catch (error) {
    if (error instanceof AxiosError || error instanceof Error)
      return thunkApi.rejectWithValue(error.message);

    return thunkApi.rejectWithValue("Something went wrong");
  }
});

export const logout = createAsyncThunk<undefined, any, { rejectValue: string }>(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await axios.get("/api/auth/logout");

      clearAuthHeader();
    } catch (error) {
      if (error instanceof AxiosError || error instanceof Error)
        return thunkApi.rejectWithValue(error.message);

      return thunkApi.rejectWithValue("Something went wrong");
    }
  }
);
