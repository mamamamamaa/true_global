import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { lazy, useEffect } from "react";
import { PrivateRoute } from "./utils/PrivateRoute.tsx";
import { RestrictedRoute } from "./utils/ProtectedRoute.tsx";
import { useAppDispatch } from "./redux/hooks.ts";
import { refresh } from "./redux/auth/operations.ts";

const HomePage = lazy(() => import("./pages/Home.tsx"));
const CategoryPage = lazy(() => import("./pages/Category.tsx"));
const TaskPage = lazy(() => import("./pages/Task.tsx"));
const LoginPage = lazy(() => import("./pages/Login.tsx"));
const RegisterPage = lazy(() => import("./pages/Register.tsx"));

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(refresh());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/category"
          element={
            <PrivateRoute component={<CategoryPage />} redirectTo="/login" />
          }
        />
        <Route
          path=":categoryId/tasks"
          element={
            <PrivateRoute component={<TaskPage />} redirectTo="/login" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/category" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/category"
            />
          }
        />
      </Route>
    </Routes>
  );
};
