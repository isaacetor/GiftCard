import React from "react";
import styled from "styled-components";
import ProfileComp from "./Home/Home";

const UserHome = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        // background: "red",
      }}
    >
      <ProfileComp />
    </div>
  );
};

export default UserHome;

const Container = styled.div``;
