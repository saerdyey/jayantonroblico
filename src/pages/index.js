import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Works from "../components/Works";
import Footer from "../components/Footer";
import Techs from "../components/Techs";
import Blog from "../components/Blog";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // arriving from a blog post via "/#blog": jump to that section
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const section = id && document.getElementById(id);
    if (section) section.scrollIntoView();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Works />
      <Techs />
      <Blog />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
