import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: var(--border);
`;

export const Cta = styled.div`
  background: var(--orange);
  padding: 90px 24px;
  border-bottom: var(--border);

  @media screen and (max-width: 480px) {
    padding: 64px 16px;
  }
`;

export const CtaInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 32px;
  flex-wrap: wrap;
`;

export const FooterText = styled.div`
  max-width: 720px;
`;

export const FooterTextP = styled.p`
  font-size: clamp(40px, 7vw, 84px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -2px;
  color: var(--on-accent);
`;

export const FooterSub = styled.p`
  margin-top: 16px;
  font-family: var(--font-term);
  font-size: 26px;
  color: var(--on-accent);
`;

export const FooterWrapper = styled.div`
  background: var(--band-bg);
  color: var(--band-fg);
  padding: 22px 24px;

  @media screen and (max-width: 480px) {
    padding: 22px 16px;
  }
`;

export const FooterBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterCredits = styled.div``;

export const FooterP = styled.p`
  font-family: var(--font-pixel);
  font-size: 12px;
  line-height: 1.8;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 12px;
`;

export const LinkBox = styled.div``;

export const Anchor = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--band-fg);
  border: 2px solid var(--band-fg);
  box-shadow: 3px 3px 0 var(--mustard);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;

  &:hover {
    background: var(--mustard);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--orange);
  }
`;

export const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
`;
