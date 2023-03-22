import React from "react";
import styled from "styled-components";

const GetStarted = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            Sign Up to <br /> get started
          </Head>
          <Button>Sign Up</Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default GetStarted;

const Container = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Head = styled.div`
  font-size: 50px;
  color: #5352ec;
  font-weight: 800;
  text-align: center;
  text-transform: capitalize;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 140px;
  height: 40px;
  border: none;
  outline: none;
  font-size: 15px;
  margin-top: 30px;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;
