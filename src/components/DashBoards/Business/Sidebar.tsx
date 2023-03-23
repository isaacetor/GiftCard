import React from "react";
import styled from "styled-components";
import DashboardBars from "./Props.Bars";
import { HiHome, HiBell } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import pic from "../../../Assets/phone.png";
import { TbArrowsLeftRight } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

interface iDisplay {
  sow: boolean;
}
const Sidebar: React.FC<iDisplay> = ({ sow }) => {
  const [home, setHome] = React.useState(true);
  const [trans, setTrans] = React.useState(true);
  const [wallet, setWallet] = React.useState(true);
  const [notify, setNotify] = React.useState(true);
  const [support, setSupport] = React.useState(true);
  const [account, setAccount] = React.useState(true);
  const [logout, setLogout] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const navigate = useNavigate();

  return (
    <div>
      <Container dsp={show ? "flex" : "none"}>
        <Logo>MAVERICKS</Logo>
        <br />
        <br />
        <br />
        <Bars>
          <div
            onClick={() => {
              setHome(false);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard");
            }}
          >
            <DashboardBars
              pic={<HiHome />}
              routeName="Home"
              cl={home ? "#d1abf5" : "white"}
              bd={home ? "" : "4px solid white"}
              hov={home ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(false);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/history");
            }}
          >
            <DashboardBars
              pic={<MdInsertChart />}
              routeName="Transaction"
              cl={trans ? "#d1abf5" : "white"}
              bd={trans ? "" : "4px solid white"}
              hov={trans ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(false);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/wallet");
            }}
          >
            <DashboardBars
              pic={<FaWallet />}
              routeName="Wallet"
              cl={wallet ? "#d1abf5" : "white"}
              bd={wallet ? "" : "4px solid white"}
              hov={wallet ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(false);
              setSupport(true);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/notify");
            }}
          >
            <DashboardBars
              pic={<HiBell />}
              routeName="Notification"
              cl={notify ? "#d1abf5" : "white"}
              bd={notify ? "" : "4px solid white"}
              hov={notify ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(false);
              setAccount(true);
              setLogout(true);
              navigate("/dashboard/support");
            }}
          >
            <DashboardBars
              pic={<AiFillMessage />}
              routeName="Support"
              cl={support ? "#d1abf5" : "white"}
              bd={support ? "" : "4px solid white"}
              hov={support ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(false);
              setLogout(true);
              navigate("/dashboard/account");
            }}
          >
            <DashboardBars
              pic={<BsPersonFill />}
              routeName="Account"
              cl={account ? "#d1abf5" : "white"}
              bd={account ? "" : "4px solid white"}
              hov={account ? " #4c2be2" : ""}
            />
          </div>
          <div
            onClick={() => {
              setHome(true);
              setTrans(true);
              setWallet(true);
              setNotify(true);
              setSupport(true);
              setAccount(true);
              setLogout(false);
            }}
          >
            <DashboardBars
              pic={<CiLogout />}
              routeName="Log Out"
              cl={logout ? "#d1abf5" : "white"}
              bd={logout ? "" : "4px solid white"}
              hov={logout ? " #4c2be2" : ""}
            />
          </div>
        </Bars>
        <Image>
          <ImageWrapper>
            <img src={pic} />
            <Big>Get Started</Big>
            <Small>Create a GiftCard or Gift Someone</Small>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button>Buy</Button>
              <Button>Gift</Button>
            </div>
          </ImageWrapper>
        </Image>
        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "63%",
            left: "40px",
            fontSize: "6px",
          }}
        >
          <TiStarFullOutline />
        </div>
        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "75%",
            left: "55px",
            fontSize: "9px",
          }}
        >
          <TiStarFullOutline />
        </div>

        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "91%",
            left: "53px",
            fontSize: "7px",
          }}
        >
          <TiStarFullOutline />
        </div>

        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "70%",
            right: "27px",
            fontSize: "14px",
          }}
        >
          <TiStarFullOutline />
        </div>

        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "69%",
            right: "25px",
            fontSize: "4px",
          }}
        >
          <TiStarFullOutline />
        </div>
        <div
          style={{
            position: "absolute",
            color: "gold",
            top: "58%",
            right: "55px",
            fontSize: "10px",
          }}
        >
          <TiStarFullOutline />
        </div>
        <Shower
          onClick={() => {
            setShow(false);
          }}
        >
          <TbArrowsLeftRight />
        </Shower>
      </Container>
    </div>
  );
};

export default Sidebar;

const Container = styled.div<{ dsp: string }>`
  width: 250px;
  background-color: blueviolet;
  padding-top: 10px;
  position: relative;
  display: ${(props) => props.dsp};
  flex-direction: column;
  position: relative;
  transition: all 350ms;
`;
const Logo = styled.div`
  color: white;
  padding-left: 30px;
`;
const Bars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0;
  padding: 0;
`;
const Image = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin: 5px;
  width: calc(100% - 10px);
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 20px;
  background-color: #372be2;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 160px;
    height: 120px;
    object-fit: cover;
    object-position: center;
  }
`;
const ImageWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h5 {
    font-weight: 400;
  }
`;
const Small = styled.div`
  font-size: 11px;
  margin-bottom: 20px;
`;
const Big = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 60px;
  height: 30px;
  /* font-size: 12px; */
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 11px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;
const Shower = styled.div`
  position: absolute;
  right: -15px;
  top: 2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 200;
  color: purple;
  background-color: white;
`;
