import React from "react";
import styled from "styled-components";
import pic from "../../Assets/abPhone.webp";
import AboutCard from "./props/Props.About";

const AppWorks = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>
            <div>
              <H>Wondering How the App Works?</H>
              <P>Make your trade in few easy steps</P>
              <Picture src={pic} />
            </div>
          </Head>
          <Cards>
            <AboutCard
              logo={pic}
              heading="Create Account"
              par="Create an account with your valid details and add your bank account / mobile money."
            />
            <AboutCard
              logo={pic}
              heading="Choose a Gift Card"
              par="A business card allows you trade in a particular business, a Master Card allows you trade accross all our registered businesses"
            />{" "}
            <AboutCard
              logo={pic}
              heading="Buy a Gift Card"
              par="Make payment to purchase a Gift Card through KoraPay's secure payment platform."
            />{" "}
            <AboutCard
              logo={pic}
              heading="Use the Gift Card"
              par="You can excercise a gift card's value on purchasing products across our registered businesses without cash or money transfer"
            />{" "}
            <AboutCard
              logo={pic}
              heading="Transfer your Gift Card"
              par="You could either sell your gift card to any of our registered users, or gift it to someone."
            />
            <Picture2 src={pic} />
          </Cards>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AppWorks;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  height: 95%;
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 40px;
  }
`;
const H = styled.div`
  font-size: 31px;
  font-weight: bold;
  @media screen and (min-width: 1000px) {
    font-size: 40px;
  }
`;
const P = styled.div`
  margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;
const Head = styled.div`
  color: #383838;
  @media screen and (min-width: 1200px) {
    width: 20%;
  }
`;
const Picture = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  display: none;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`;
const Picture2 = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  margin-top: 40px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  @media screen and (min-width: 1200px) {
    width: calc(80% - 40px);
  }
`;
