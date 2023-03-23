import React from "react";
import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import { TbArrowsLeftRight } from "react-icons/tb";
import UserHome from "../DashBoards/Business/User.Home";
import UserHistory from "../DashBoards/Business/User.History";
import UserWallet from "../DashBoards/Business/User.Wallet";
import UserNotify from "../DashBoards/Business/User.Notify";
import UserSupport from "../DashBoards/Business/User.Support";
import UserAccount from "../DashBoards/Business/User.Account";
import Sidebar from "../DashBoards/Business/Sidebar";
import Sidebar2 from "../DashBoards/Business/Sidebar2";

const BusinessRoute = () => {
  const [show, setShow] = React.useState(false);
  const toggle = () => {
    setShow(!show);
  };
  let element = useRoutes([
    {
      path: "/business/dashboard",
      element: <UserHome />,
    },
    {
      path: "/business/history",
      element: <UserHistory />,
    },
    {
      path: "/business/wallet",
      element: <UserWallet />,
    },
    {
      path: "/business/notify",
      element: <UserNotify />,
    },
    {
      path: "/business/support",
      element: <UserSupport />,
    },
    {
      path: "/business/account",
      element: <UserAccount />,
    },
  ]);
  return (
    <div style={{ overflow: "hidden" }}>
      <Shower onClick={toggle}>
        <TbArrowsLeftRight />
      </Shower>
      <div
        style={{
          width: "100vw",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Mobile>{show ? <Sidebar sow={show} /> : null}</Mobile>
        <Container>
          <Sidebar2 />
        </Container>
        {element}
      </div>
    </div>
  );
};

export default BusinessRoute;

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
