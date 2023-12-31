import PublicIcon from "@mui/icons-material/Public";
import { Typography } from "@mui/material";
import { LOGO_TEXT } from "../consts.ts";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Logo: FC = () => {
  return (
    <>
      <PublicIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 5,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <NavLink to="/">{LOGO_TEXT}</NavLink>
      </Typography>
      <PublicIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 5,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1.5rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <NavLink to="/">{LOGO_TEXT}</NavLink>
      </Typography>
    </>
  );
};
