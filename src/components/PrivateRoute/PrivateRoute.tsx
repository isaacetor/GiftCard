import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../Global/Store";

const PrivateRoute = ({ children }: any) => {
  const user = useAppSelector((state) => state.bizClient);

  if (user?.status === "Business") {
    return children;
  } else if (user?.status === "User") {
    return children;
  } else {
    <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
