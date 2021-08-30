import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Techs from "../components/Techs";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Works />
      <Techs />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
