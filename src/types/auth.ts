export interface AuthState {
  error: string | null | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  email: string | null;
  accessToken: string | null;
}

export interface RefreshResponse {
  email: string;
}

export interface SignInResponse {
  email: string;
  accessToken: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp extends SignIn {}
export interface SignUpResponse extends SignInResponse {}
