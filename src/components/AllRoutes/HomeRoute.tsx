import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Homescreen from "../LandingPage/Homescreen";

const HomeRoute = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <div>{elements}</div>;
};

export default HomeRoute;
