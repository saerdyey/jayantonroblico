import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import PingCardMobile from "../PingCardMobile";
import { animateScroll as scroll } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const toggleCard = () => {
    setCardOpen(!cardOpen);
  };

  return (
    <SidebarContainer isOpen={isOpen} cardOpen={cardOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="techs"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Techs
          </SidebarLink>
          {/* <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Contact
          </SidebarLink> */}
        </SidebarMenu>
        <SidebarBtnWrap>
          <PingCardMobile isOpen={cardOpen} toggle={toggleCard} />
          <SidebarRoute
            onClick={() => {
              toggleCard();
            }}
          >
            Ping Me
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
