import React from "react";
import { Button } from "../ButtonElements";
import { CONTACT_MAILTO } from "../../constants";
import {
  FooterContainer,
  Cta,
  CtaInner,
  FooterText,
  FooterTextP,
  FooterSub,
  FooterWrapper,
  FooterBar,
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

const socials = [
  { href: "https://twitter.com/saerdyey", icon: twitter, name: "Twitter" },
  { href: "https://facebook.com/saerdyey", icon: facebook, name: "Facebook" },
  {
    href: "https://www.linkedin.com/in/jayantonroblico23/",
    icon: linkedin,
    name: "LinkedIn",
  },
  { href: "https://github.com/saerdyey", icon: github, name: "GitHub" },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Cta>
        <CtaInner>
          <FooterText>
            <FooterTextP>Wanna work with me?</FooterTextP>
            <FooterSub>&gt; ping me up and let's discuss your idea!</FooterSub>
          </FooterText>
          <Button big fontBig href={CONTACT_MAILTO}>
            Say Hello ✉
          </Button>
        </CtaInner>
      </Cta>
      <FooterWrapper>
        <FooterBar>
          <FooterCredits>
            <FooterP>Designed and built with ♥ by Jay Anton Roblico</FooterP>
            <FooterP>© {new Date().getFullYear()} · all systems nominal</FooterP>
          </FooterCredits>
          <FooterLinks>
            {socials.map((social) => (
              <LinkBox key={social.name}>
                <Anchor
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <LinkIcon src={social.icon} alt="" />
                </Anchor>
              </LinkBox>
            ))}
          </FooterLinks>
        </FooterBar>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
