import React from "react";
import styled from "styled-components";

interface aBout {
  logo: any;
  heading: string;
  par: string;
}

const AboutCard: React.FC<aBout> = ({ logo, heading, par }) => {
  return (
    <Container>
      <Wrapper>
        <Picture src={logo} />
        <H>{heading}</H>
        <P>{par}</P>
      </Wrapper>
    </Container>
  );
};

export default AboutCard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const H = styled.div`
  font-size: 27px;
  @media screen and (min-width: 1000px) {
    font-size: 31px;
  }
  color: #024edb;
`;
const P = styled.div`
  margin-top: 10px;
  font-weight: 600;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
  color: #636262;
`;
const Picture = styled.img`
  width: 50px;
  height: 50px;
`;
