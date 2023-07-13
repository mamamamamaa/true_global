import { FC } from "react";
import { useAppSelector } from "../redux/hooks.ts";
import { selectAuthEmail } from "../redux/auth/selectors.ts";
import { Box, Typography } from "@mui/material";
import { TaskForm } from "../components/Task/TaskForm.tsx";

const Home: FC = () => {
  const email = useAppSelector(selectAuthEmail);

  return (
    <Box marginTop={"4rem"} textAlign={"center"}>
      <Typography variant="h4" component="h1" gutterBottom>
        {email ? `Welcome, ${email}!` : "Welcome to Our Task Website!"}
      </Typography>
      <Typography variant="body1" marginBottom={"4rem"}>
        Effortlessly manage your tasks with our intuitive task manager. Stay
        organized, boost productivity, and achieve your goals with ease.
      </Typography>
      {!email && (
        <Typography variant="body2">
          Please login or register to access the features of our website.
        </Typography>
      )}
      <TaskForm />
    </Box>
  );
};

export default Home;
