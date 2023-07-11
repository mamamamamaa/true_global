import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "./Toast.tsx";

export const Layout: FC = () => {
  return (
    <>
      <>
        <Toast />
        <header>Header</header>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
        <footer>Footer</footer>
      </>
    </>
  );
};
