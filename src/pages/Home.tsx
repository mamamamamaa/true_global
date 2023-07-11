import { FC } from "react";
import { useAppDispatch, useAuth } from "../redux/hooks.ts";
import { setAccessToken } from "../redux/auth/slice.ts";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAuth();

  console.log("update home");

  const handleClick = () => dispatch(setAccessToken());

  return (
    <>
      <button type="button" onClick={handleClick}>
        Click
      </button>
    </>
  );
};

export default Home;
