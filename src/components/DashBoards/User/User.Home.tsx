import React from "react";
import styled from "styled-components";
import ProfileComp from "./Home/Home";

const UserHome = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <ProfileComp />
    </div>
  );
};

export default UserHome;

const Container = styled.div``;
