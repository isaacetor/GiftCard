import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../DashBoards/Business/Home/Home";
// import UserHeader from "../DashBoards/User/User.Header";

const DashboardRoutes = () => {
  const elements = useRoutes([
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/dashboard/history",
      //   element: <UserHistory />,
    },
    {
      path: "/dashboard/wallet",
      //   element: <UserWallet />,
    },
    {
      path: "/dashboard/notify",
      //   element: <UserNotify />,
    },
    {
      path: "/dashboard/support",
      //   element: <UserSupport />,
    },
    {
      path: "/dashboard/account",
      //   element: <UserAccount />,
    },
  ]);
  return (
    <div>
      {/* <UserHeader /> */}
      {elements}
    </div>
  );
};

export default DashboardRoutes;
