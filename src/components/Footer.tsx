import { FC } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { LOGO_TEXT } from "../consts.ts";

export const Footer: FC = () => {
  return (
    <Box
      sx={{
        marginTop: "auto",
        width: "100%",
        height: 0,
        backgroundColor: "inherit",
      }}
    >
      <Divider />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              {LOGO_TEXT}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
