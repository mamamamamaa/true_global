import { FC, useState, MouseEvent } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { PRIVATE_PAGES, RESTRICTED_PAGES } from "../consts.ts";
import { Navigation } from "./Navigation.tsx";
import { MobileNavigation } from "./MobileNavigation.tsx";
import { Logo } from "./Logo.tsx";

export const Header: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

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
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Logo />
          <Navigation
            handleCloseNavMenu={handleCloseNavMenu}
            pages={PRIVATE_PAGES}
            flexGrow={1}
          />
          <Navigation
            handleCloseNavMenu={handleCloseNavMenu}
            pages={RESTRICTED_PAGES}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
