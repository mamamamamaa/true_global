import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Routes } from "../types/common.ts";

interface Props {
  pages: Routes;
  handleCloseNavMenu: () => void;
  flexGrow?: number;
}

export const Navigation: FC<Props> = ({
  pages,
  handleCloseNavMenu,
  flexGrow = 0,
}) => {
  return (
    <Box sx={{ flexGrow, display: { xs: "none", md: "flex" }, gap: 5 }}>
      {pages.map(({ pageName, pathTo }, idx) => (
        <Typography
          role="button"
          key={idx}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          <NavLink to={pathTo}>{pageName}</NavLink>
        </Typography>
      ))}
    </Box>
  );
};
