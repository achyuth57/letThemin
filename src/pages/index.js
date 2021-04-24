import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../Components/InfoSection/Data";
import Services from "../Components/Services";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
