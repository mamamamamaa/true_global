import { FC } from "react";
import { CardContent, Typography } from "@mui/material";

interface Props {
  name: string;
  date_start: string;
  date_end: string;
}

export const TaskCardContent: FC<Props> = ({ date_end, date_start, name }) => {
  return (
    <CardContent>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Start: {date_start}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        End: {date_end}
      </Typography>
    </CardContent>
  );
};
