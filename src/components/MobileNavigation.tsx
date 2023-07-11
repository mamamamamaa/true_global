import { FC, MouseEvent } from "react";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ALL_PAGES } from "../consts.ts";
import { NavLink } from "react-router-dom";

interface Props {
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
  anchorElNav: null | HTMLElement;
}

export const MobileNavigation: FC<Props> = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {ALL_PAGES.map(({ pageName, pathTo }, idx) => (
          <MenuItem key={idx} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">
              <NavLink to={pathTo}>{pageName}</NavLink>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
