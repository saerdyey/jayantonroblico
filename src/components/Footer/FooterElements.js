import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #010606;
  padding: 20px 0;
`;

export const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const FooterText = styled.div`
  flex: 1;
  color: #767676;
`;

export const FooterTextP = styled.p`
  text-align: start;
  @media only screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const FooterCredits = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;

  @media only screen and (max-width: 480px) {
    padding: 15px 0px;
  }
`;

export const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkIcon = styled.img`
  width: 24px;
  height: auto;
  filter: invert(50%) sepia(1%) saturate(0%) hue-rotate(20deg);
  &:hover {
    filter: invert(92%) sepia(100%) saturate(36%) hue-rotate(250deg);
    transform: scale(1.2);
    cursor: pointer;
  }
  transition: all 0.1s;
  transform-origin: 50% 50%;
`;
export const LinkBox = styled.div`
  padding: 0 10px;
`;

export const FooterP = styled.p`
  text-align: center;
`;

export const Anchor = styled.a``;
