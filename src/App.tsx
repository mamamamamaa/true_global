import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/Home.tsx"));
const CategoryPage = lazy(() => import("./pages/Category.tsx"));
const TaskPage = lazy(() => import("./pages/Task.tsx"));
const LoginPage = lazy(() => import("./pages/Login.tsx"));
const RegisterPage = lazy(() => import("./pages/Register.tsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />}>
          <Route path=":categoryId" element={<TaskPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
