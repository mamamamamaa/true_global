import { FC } from "react";
import { Box, Typography } from "@mui/material";

const NotFound: FC = () => {
  return (
    <Box marginTop={"4rem"} textAlign={"center"}>
      <Typography variant="h4" component="h1" gutterBottom>
        Page not found
      </Typography>
    </Box>
  );
};

export default NotFound;
