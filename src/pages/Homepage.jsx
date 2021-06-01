import React, { useState } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import MainSection from "../components/MainSection/MainSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "../components/AboutSection/Data";
import Services from "../components/Services/Services";
const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection />
      <AboutSection {...homeObjOne} />
      <Services />
      <AboutSection {...homeObjThree} />
      <AboutSection {...homeObjFour} />
      <AboutSection {...homeObjFive} />
    </>
  );
};

export default Homepage;
