import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  PostHeaderBar,
  PostHeaderInner,
  BackLink,
} from "../BlogPost/BlogPostElements";
import { NavLogo, NavImg, NavActions, ThemeToggle } from "../Navbar/NavbarElements";
import useTheme from "../../hooks/useTheme";
import JarLogo from "../../images/jar_logo.png";

// Slim header for pages outside the home page: logo, theme toggle, back link.
const SimpleHeader = ({ backTo, backLabel }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <PostHeaderBar>
      <PostHeaderInner>
        <NavLogo to="/">
          <NavImg src={JarLogo} alt="" />
          jar
        </NavLogo>
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
          <BackLink to={backTo}>{backLabel}</BackLink>
        </NavActions>
      </PostHeaderInner>
    </PostHeaderBar>
  );
};

export default SimpleHeader;
