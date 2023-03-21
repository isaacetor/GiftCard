import React from "react";
import styled from "styled-components";
import rstar from "../../Assets/stars.svg";
import lstar from "../../Assets/stars.svg";
import phone from "../../Assets/phone.png";
import flower from "../../Assets/flower.svg";
import { BsPerson } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Container>
        <Left>
          <img
            src={rstar}
            alt=""
            style={{ position: "absolute", left: "75%", top: "20%" }}
          />
          <img
            src={lstar}
            alt=""
            style={{
              position: "absolute",
              top: "20%",
              left: "35px",
              height: "360px",
            }}
          />
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h4>MAVERICK</h4>
          </NavLink>
          <h1>
            Glad to have <br /> you back
          </h1>
          <p>
            Glad to have you back We are glad to have you back ☺️, Let’s get you
            trading
          </p>
          <Img src={phone} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right>
          <h2>Log in</h2>
          <Inputs>
            <BsPerson
              style={{
                marginLeft: "15px",
                fontSize: "25px",
              }}
            />
            <input placeholder="Enter email or username" />
          </Inputs>

          <Inputs>
            <MdPassword
              style={{
                marginLeft: "15px",
                fontSize: "25px",
              }}
            />
            <input placeholder="Password" />
          </Inputs>
          <div
            style={{
              display: "flex",
              marginLeft: "60px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "15px", height: "15px", background: "#f9f4ff" }}
            />
            <p
              style={{
                margin: "0",
                marginLeft: "10px",
                fontSize: "15px",
              }}
            >
              Always remember me
            </p>
          </div>
          <button
            style={{
              width: "160px",
              height: "48px",
              marginLeft: "60px",
              border: "0",
              backgroundColor: "#8246f3",
              color: "white",
              borderRadius: "10px",
              marginTop: "40px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
          <p
            style={{
              margin: "0",
              marginLeft: "60px",
              fontSize: "15px",
              marginTop: "20px",
            }}
          >
            I don't have an account.
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <span style={{ color: "blue" }}>Create one</span>
            </NavLink>
          </p>
        </Right>
      </Container>
    </div>
  );
};

export default Login;

const Inputs = styled.div`
  background-color: #f9f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  width: 430px;
  height: 55px;
  margin-bottom: 20px;
  margin-left: 60px;

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 7px;

    ::placeholder {
      color: silver;
      font-size: 15px;
    }
  }
`;

const Right = styled.div`
  h2 {
    margin-top: 60px;
    margin-left: 60px;
    font-size: 36px;
    margin-bottom: 60px;
  }
`;

const Img = styled.img`
  height: 230px;
  margin-top: 25px;
  transform: translate(-20%, -20%);
  transition: transform 0.3s ease-in-out;
  position: absolute;
  left: 35%;
  bottom: 1px;

  :hover {
    animation: bounce 0.5s;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: translate(-20%, -20%) scale(1);
    }
    50% {
      transform: translate(-20%, -20%) scale(1.2);
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const Left = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #8246f3;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  h4 {
    color: white;
    font-size: 21px;
    font-family: Inria serif;
    font-weight: 600;
    margin-top: 30px;
  }

  h1 {
    color: white;
    font-size: 44px;
    text-align: center;
    margin-top: 50px;
  }
  p {
    color: white;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    width: 65%;
    font-size: 23px;
  }
`;
