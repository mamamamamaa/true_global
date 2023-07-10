import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>Home page</>} />
        <Route path="1" element={<>1 page</>} />
        <Route path="2" element={<>2 page</>} />
      </Route>
    </Routes>
  );
};
