import React from "react";
import styled from "styled-components";
// import { UseAppSelector } from "../../Global/Store";
import { useQuery } from "@tanstack/react-query";
// import { getOneClient } from "../../Api/Endpoints";

const Home = () => {
  //   const user = UseAppSelector((state) => state.Client);

  // console.log(user);

  const fetchUser = useQuery({
    queryKey: ["Clients"],
    // queryFn: () => getOneClient(user?._id),
  });

  console.log(fetchUser);

  return (
    <div>
      <Container>
        <Wrapper>
          {/* <Text>Welcome Back , {user?.name?.toUpperCase()} 👋</Text> */}
          <Text>Welcome Back your name,</Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;

const Text = styled.div`
  width: 100%;
  /* height: 10%; */
  /* background-color: blue; */
  color: #1d1d41;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: calc(100vw - 270px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff2ec92; */
  background-color: #d9561a;

  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100vw;
    /* background-color: #f1f4fb92; */
  }
`;
