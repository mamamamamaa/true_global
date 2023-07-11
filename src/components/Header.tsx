import { FC, useState, MouseEvent } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { PAGES } from "../consts.ts";
import { Navigation } from "./Navigation.tsx";
import { MobileNavigation } from "./MobileNavigation.tsx";
import { Logo } from "./Logo.tsx";
import { useAppDispatch, useAppSelector } from "../redux/hooks.ts";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors.ts";
import { logout } from "../redux/auth/operations.ts";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleLogout = () => dispatch(logout());

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileNavigation
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Logo />
          <Navigation
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={PAGES}
            flexGrow={1}
          />
          <Navigation
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            handleCloseNavMenu={handleCloseNavMenu}
            forPrivateRoutes={true}
            pages={PAGES}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
