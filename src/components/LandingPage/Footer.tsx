import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <LogoPart>
          <Logo>GIFTHAVEN</Logo>
          <Text>A Unique trading business perfectly built for you.</Text>
          <Button>Log In</Button>
        </LogoPart>
        <Connect>
          <Heading>Company</Heading>
          <Trailing>About us</Trailing>
          <Trailing>Terms</Trailing>
          <Trailing>Privacy Policy</Trailing>
          <Trailing>AML Policy</Trailing>
          <Trailing>FAQs</Trailing>
        </Connect>
        <Company>
          <Heading>Connect with Us</Heading>
          <Trailing>Contact us</Trailing>
          <Trailing>Follow us on Instagram</Trailing>
        </Company>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  font-size: 12px;
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  background-color: #eeeeee7a;
  color: #525151;
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
`;
const LogoPart = styled.div``;
const Company = styled.div``;
const Heading = styled.div`
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
  font-weight: 600;
`;
const Trailing = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;
const Connect = styled.div``;
const Logo = styled.div``;
const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border-radius: 10px;
  color: white;
  background-color: #a002a0f2;
  width: 90px;
  height: 35px;
  border: none;
  outline: none;
  transition: all 350ms;
  :hover {
    background-color: #940294;
  }
`;
