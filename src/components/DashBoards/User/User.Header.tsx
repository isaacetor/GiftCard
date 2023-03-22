import React from "react";
import styled from "styled-components";

const UserHeader = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Maverick</Title>
          <Navigation>
            <Nav>Home</Nav>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserHeader;

const Nav = styled.div`
  background-color: red;
  padding: 10px 20px;
`;

const Navigation = styled.div``;

const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-weight: 600;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 70%;
  background-color: green;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`;

const Container = styled.div`
  width: 270px;
  height: 100vh;
  background: linear-gradient(rgb(147, 66, 246) 0%, rgb(83, 82, 236) 100%);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 90px;
  }
`;
