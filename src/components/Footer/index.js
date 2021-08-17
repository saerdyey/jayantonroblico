import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterText,
  FooterTextP,
  FooterLinks,
  LinkBox,
  LinkIcon,
  FooterCredits,
  FooterP,
  Anchor,
} from "./FooterElements";

import twitter from "../../images/logos/twitter.svg";
import facebook from "../../images/logos/facebook.svg";
import linkedin from "../../images/logos/linkedin.svg";
import github from "../../images/logos/github.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>
          <FooterTextP>Wanna work with me?</FooterTextP>
          <FooterTextP>Ping me up and let's discuss your idea!</FooterTextP>
        </FooterText>
        <FooterCredits>
          <FooterP>Designed and Built with ♥ by Jay Anton Roblico</FooterP>
          <FooterP>2021</FooterP>
        </FooterCredits>
        <FooterLinks>
          <LinkBox>
            <Anchor href="https://twitter.com/saerdyey" target="_blank">
              <LinkIcon src={twitter} />
            </Anchor>
          </LinkBox>
          <LinkBox>
            <Anchor href="https://facebook.com/saerdyey" target="_blank">
              <LinkIcon src={facebook} />
            </Anchor>
          </LinkBox>
          <LinkBox>
            <Anchor
              href="https://www.linkedin.com/in/jayantonroblico23/"
              target="_blank"
            >
              <LinkIcon src={linkedin} />
            </Anchor>
          </LinkBox>
          <LinkBox>
            <Anchor href="https://github.com/saerdyey" target="_blank">
              <LinkIcon src={github} />
            </Anchor>
          </LinkBox>
        </FooterLinks>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
