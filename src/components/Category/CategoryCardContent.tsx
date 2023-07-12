import { FC } from "react";
import { CardContent, Typography } from "@mui/material";
import { dateFormat } from "../../utils/dateFormat.ts";

interface Props {
  name: string;
  task_count: number;
  date_created: string;
}

export const CategoryCardContent: FC<Props> = ({
  task_count,
  name,
  date_created,
}) => {
  const tasks = task_count === 1 ? `${task_count} Task` : `${task_count} Tasks`;

  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "start", md: "center" },
        gap: { xs: 1, md: 10 },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ width: { xs: "50%", md: "200px" }, overflow: "scroll" }}
      >
        {name}
      </Typography>
      <Typography color="textSecondary">{tasks}</Typography>
      <Typography color="textSecondary">{dateFormat(date_created)}</Typography>
    </CardContent>
  );
};
