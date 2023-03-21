import React from "react";
import styled from "styled-components";
import rstar from "../../Assets/stars.svg";
import lstar from "../../Assets/stars.svg";
import phone from "../../Assets/phone.png";
import flower from "../../Assets/flower.svg";
import { BsPerson } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { TbSquareKey } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Register = () => {
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
            Let’s Get <br /> You Started
          </h1>
          <p>
            You’re a few steps away. Fill the required form and start trading
            like a boss 😎
          </p>
          <Img src={phone} alt="" />
          <img
            src={flower}
            alt=""
            style={{ position: "absolute", bottom: "1%", left: "1px" }}
          />
        </Left>
        <Right>
          <h2>Create an Account</h2>
          <p>Let us know you 😎</p>
          <Box>
            <Inputs>
              <BsPerson
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="Name" />
            </Inputs>
            <Inputs>
              <BsPerson
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="UserName" />
            </Inputs>
            <Inputs>
              <IoMailOutline
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="E-mail address" />
            </Inputs>
            <Inputs>
              <BsTelephone
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="Phone-no" />
            </Inputs>
            <Inputs>
              <TbSquareKey
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="Password" />
            </Inputs>
            <Inputs>
              <TbSquareKey
                style={{
                  marginLeft: "15px",
                  fontSize: "25px",
                  color: "silver",
                }}
              />
              <input placeholder="Confirm password" />
            </Inputs>
          </Box>
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
              I agree to Maverick's
              <span style={{ color: "blue" }}>Terms and Conditions</span> &
              <span style={{ color: "blue" }}>Privacy Policy</span>.
            </p>
          </div>
          <button
            style={{
              width: "140px",
              height: "48px",
              marginLeft: "60px",
              border: "0",
              backgroundColor: "#8246f3",
              color: "white",
              borderRadius: "10px",
              marginTop: "31px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </Right>
      </Container>
    </div>
  );
};

export default Register;

const Inputs = styled.div`
  background-color: #f9f4ff;
  border-radius: 10px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    margin-left: 7px;

    ::placeholder {
      color: silver;
    }
  }
`;

const Box = styled.div`
  width: 650px;
  height: 240px;
  /* background-color: green; */
  margin-left: 60px;
  display: grid;
  grid-template-rows: repeat(2, 65px);
  grid-template-columns: repeat(2, 1fr);
  gap: 23px;
  margin-top: 43px;
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
const Right = styled.div`
  h2 {
    margin-top: 60px;
    margin-left: 60px;
    font-size: 36px;
  }

  p {
    margin-left: 60px;
    margin-top: 45px;
    font-size: 20px;
    font-family: 600;
  }
`;
