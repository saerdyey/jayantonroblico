import React, { useState, useEffect } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavImg,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavActions,
  ThemeToggle,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";
import JarLogo from "../../images/jar_logo.png";
import { CONTACT_MAILTO } from "../../constants";
import useTheme from "../../hooks/useTheme";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavImg src={JarLogo}></NavImg>jar
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="techs"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Techs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="blog"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Blog
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-30}
              >
                Contact
              </NavLinks>
            </NavItem> */}
          </NavMenu>
          <NavActions>
            <ThemeToggle
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </ThemeToggle>
            <NavBtn>
              <NavBtnLink as="a" href={CONTACT_MAILTO}>
                Say Hello ✉
              </NavBtnLink>
            </NavBtn>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          </NavActions>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
