import React from "react";
import { useRoutes } from "react-router-dom";
import BizzLogin from "../Auth/Business.Login";
import BizzSignUp from "../Auth/Business.Register";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SelectAccount from "../Auth/SelectAccount";
import Homescreen from "../LandingPage/Homescreen";

const HomeRoute = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/select-account",
      element: <SelectAccount />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/business/register",
      element: <BizzSignUp />,
    },
    {
      path: "/business/login",
      element: <BizzLogin />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return <div>{elements}</div>;
};

export default HomeRoute;
