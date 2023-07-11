import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes } from "../types/common.ts";

interface Props {
  pages: Routes;
  handleCloseNavMenu: () => void;
  forPrivateRoutes?: boolean;
  flexGrow?: number;
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export const Navigation: FC<Props> = ({
  pages,
  forPrivateRoutes = false,
  flexGrow = 0,
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <Box sx={{ flexGrow, display: { xs: "none", md: "flex" }, gap: 5 }}>
      {isLoggedIn && forPrivateRoutes ? (
        <Typography
          role="button"
          onClick={handleLogout}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Logout
        </Typography>
      ) : (
        pages.map(
          ({ pageName, pathTo, isPrivate }, idx) =>
            forPrivateRoutes === isPrivate && (
              <Typography
                role="button"
                key={idx}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink to={pathTo}>{pageName}</NavLink>
              </Typography>
            )
        )
      )}
    </Box>
  );
};
