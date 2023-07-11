import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toast } from "./Toast.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Loader } from "./Loader.tsx";
import { Container } from "@mui/material";

export const Layout: FC = () => {
  return (
    <>
      <Toast />
      <Loader />
      <Header />
      <main>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
};
