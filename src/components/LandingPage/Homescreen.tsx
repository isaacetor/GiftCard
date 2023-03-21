import React from "react";
import About from "./About";
import AppWorks from "./AppWorks";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Header from "./Header";
import Hero from "./Hero";

const Homescreen = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <AppWorks />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Homescreen;
