import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../redux/hooks.ts";

export const Layout: FC = () => {
  console.log("update layout");
  return (
    <>
      <>
        <header>Header</header>
        <Suspense>
          <Outlet />
        </Suspense>
        <footer>Footer</footer>
      </>
    </>
  );
};
