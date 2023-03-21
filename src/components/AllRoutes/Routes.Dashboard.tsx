import React from "react";
import { useRoutes } from "react-router-dom";

import styled from "styled-components";
import { TbArrowsLeftRight } from "react-icons/tb";
import UserHome from "../DashBoards/User/User.Home";
import UserHistory from "../DashBoards/User/User.History";
import UserWallet from "../DashBoards/Business/User.Wallet";
import UserNotify from "../DashBoards/User/User.Notify";
import UserSupport from "../DashBoards/User/User.Support";
import UserAccount from "../DashBoards/User/User.Account";
import Sidebar from "../DashBoards/User/Sidebar";
import Sidebar2 from "../DashBoards/User/SideBar2";

const DashboardRoutes = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };
  let element = useRoutes([
    {
      path: "/dashboard",
      element: <UserHome />,
    },
    {
      path: "/dashboard/history",
      element: <UserHistory />,
    },
    {
      path: "/dashboard/wallet",
      element: <UserWallet />,
    },
    {
      path: "/dashboard/notify",
      element: <UserNotify />,
    },
    {
      path: "/dashboard/support",
      element: <UserSupport />,
    },
    {
      path: "/dashboard/account",
      element: <UserAccount />,
    },
  ]);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Shower onClick={toggle}>
        <TbArrowsLeftRight />
      </Shower>
      <div style={{ width: "100vw", display: "flex", position: "relative" }}>
        <Mobile>{show ? <Sidebar sow={show} /> : null}</Mobile>
        <Container>
          <Sidebar2 />
        </Container>
        {element}
      </div>
    </div>
  );
};

export default DashboardRoutes;

const Container = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
`;
const Mobile = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 200;
  color: purple;
  @media screen and (min-width: 801px) and (max-width: 1051px) {
    display: none;
  }
`;
