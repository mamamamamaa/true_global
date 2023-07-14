import { FC, ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  children: ReactNode;
}

export const EmptyList: FC<Props> = ({ children }) => {
  return (
    <Box marginTop={"2rem"} textAlign={"center"}>
      <Typography variant="h4" component="h2" gutterBottom>
        {children}
      </Typography>
    </Box>
  );
};
