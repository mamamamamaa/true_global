import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "./Toast.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";

export const Layout: FC = () => {
  return (
    <>
      <Toast />
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
