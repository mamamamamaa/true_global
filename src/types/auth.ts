export interface AuthInitialState {
  error: string | null | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  email: string | null;
  accessToken: string | null;
}
