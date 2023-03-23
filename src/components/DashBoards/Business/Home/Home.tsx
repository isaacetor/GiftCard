import React from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";
import card from "../../../../Assets/card.svg";
import spiral from "../../../../Assets/robo.svg";
import two from "../../../../Assets/two.svg";
import { useAppSelector } from "../../../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneBiz } from "../../../API/Endpoint";

const ProfileComp = () => {
  const user = useAppSelector((state) => state.bizClient);

  const fetchUser = useQuery({
    queryKey: ["business"],
    queryFn: () => getOneBiz(user?._id),
  });

  console.log("this user", fetchUser);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <Mid>
          <Prof>
            <p>
              Welcome,
              <span style={{ fontWeight: "650", textTransform: "capitalize" }}>
                {user?.name}
              </span>
            </p>
            <Hold>
              <h5>Available balance</h5>
              <AiFillEye
                style={{
                  fontSize: "26px",
                  marginTop: "2px",

                  marginLeft: "30px",
                }}
              />
            </Hold>
            <div
              style={{ fontSize: "30px", color: "blue", fontWeight: "bolder" }}
            >
              ******
            </div>
            <button>Withdraw</button>
          </Prof>
          <h4>Quick Actions</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Card>
              <img
                src={card}
                alt=""
                style={{
                  position: "absolute",
                  bottom: "1px",
                  height: "290px",
                }}
              />
              <Sec>
                <h1>Create Gift Cards</h1>
                <p>Create gift cards and sell</p>
                <button>Generate Gift Card</button>
              </Sec>
            </Card>
            <Held>
              <Box bg="#FDF3E7" cl="#EF9837" bc="#EF9837">
                <img src={spiral} alt="" style={{ height: "40px" }} />
                <h2>Top Gift Cards</h2>
                <p>Know your gift card’s value at a glance.</p>
                <button>See top Gift cards</button>
              </Box>
              <Box bg="#f9f4ff" cl="blue" bc="#8246f3">
                <Circle>
                  <img src={two} alt="" style={{ height: "40px" }} />
                </Circle>
                <h2>Check Rates</h2>
                <p>Know your gift card’s value at a glance.</p>
                <button>Check rates</button>
              </Box>
            </Held>
          </div>
          <p
            style={{
              marginTop: "40px",
              marginLeft: "300px",
              fontSize: "19px",
              fontWeight: "bold",
            }}
          >
            Notifications
          </p>
          <NottHold>
            <Lists>
              <p style={{ margin: "0", marginLeft: "20px", fontWeight: "600" }}>
                Sylvia bought your gift card at $3000.00
              </p>
            </Lists>
          </NottHold>
        </Mid>
      </Container>
    </div>
  );
};

export default ProfileComp;

const Transc = styled.div`
  display: flex;
`;

const Up = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f9f4ff;
  padding-left: 20px;
  padding-top: 20px;

  h3 {
    margin: 0;
  }
`;

const Lists = styled.div`
  width: 75%;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 265px;
`;

const NottHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const Sec = styled.div`
  margin-left: 570px;
  h1 {
    margin: 0;
    color: white;
    font-size: 45px;
  }
  button {
    width: 150px;
    height: 40px;
    background-color: white;
    border: 0;
    color: blue;
    border-radius: 10px;
    margin-top: 25px;
    font-weight: 600;
  }
  p {
    margin: 0;
    margin-top: 3px;
    font-size: 16px;
    color: white;
  }
`;

const Box = styled.div<{ bg: string; cl: string; bc: string }>`
  width: 48%;
  height: 250px;
  background: ${({ bg }) => bg};
  border-radius: 10px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    margin-top: 15px;
    font-size: 36px;
    margin-left: 40px;
    color: ${({ cl }) => cl};
  }

  p {
    margin: 0;
    margin-top: 7px;
    font-size: 13px;
    margin-left: 40px;
  }

  button {
    margin-top: 20px;
    width: 140px;
    margin-left: 40px;
    height: 40px;
    background-color: ${({ bc }) => bc};
    border: 0;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const Held = styled.div`
  width: 75%;
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 265px;
`;

const Card = styled.div`
  width: 75%;
  height: 280px;
  background-color: #8246f3;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 265px;
`;

const Hold = styled.div`
  display: flex;
  color: blue;
  align-items: center;
  margin-top: 25px;

  h5 {
    font-size: 23px;
    font-weight: 300;
    margin: 0;
  }
`;

const Prof = styled.div`
  background-color: #f9f4ff;
  width: 80%;
  height: 180px;
  padding-top: 30px;
  padding-left: 30px;
  margin-left: 250px;

  z-index: 3;
  position: sticky;
  top: 0.2px;

  p {
    margin: 0;
    font-size: 14px;
  }

  button {
    width: 120px;
    height: 45px;
    background-color: #8246f3;
    border: 0;
    color: white;
    font-size: 15px;
    border-radius: 10px;
    margin-left: 85%;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;
const Mid = styled.div`
  width: 100%;
  height: 100vh;
  /* background: red; */
  /* overflow: hidden; */
  display: flex;
  /* justify-content: flex-start; */
  overflow: hidden;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    background-color: silver;
    border-radius: 10px;
  }
  h4 {
    margin: 0;
    margin-top: 40px;
    margin-left: 300px;
    font-size: 19px;
  }
`;
const Left = styled.div`
  width: 30%;
  height: 100vh;
  /* background-color: gold; */
  position: sticky;
  top: 0;
  overflow: hidden;
  /* z-index: 3; */
`;
