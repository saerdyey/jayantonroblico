import React from "react";
import styled from "styled-components";

/* ---------- Window: a vintage-OS style frame used across sections ---------- */

const WindowFrame = styled.div`
  background: var(--cream);
  border: var(--border);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border-bottom: var(--border);
  background: ${({ accent }) => accent || "var(--mustard)"};
  font-family: var(--font-pixel);
  font-size: 13px;
  text-transform: lowercase;
  color: var(--on-accent);
`;

const Dots = styled.span`
  display: flex;
  gap: 5px;
  flex-shrink: 0;

  i {
    width: 11px;
    height: 11px;
    border: 2px solid var(--on-accent);
    background: #fffaf0;
  }
`;

const Title = styled.span`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/* the classic striped "grip" filling the rest of the title bar */
const Stripes = styled.span`
  flex: 0 1 60px;
  height: 10px;
  background: repeating-linear-gradient(
    to bottom,
    var(--on-accent) 0 2px,
    transparent 2px 4px
  );
  opacity: 0.6;
`;

const Body = styled.div`
  padding: ${({ flush }) => (flush ? "0" : "22px")};
  flex: 1;

  @media screen and (max-width: 480px) {
    padding: ${({ flush }) => (flush ? "0" : "16px")};
  }
`;

export const Window = ({ title, accent, flush, className, children }) => (
  <WindowFrame className={className}>
    <TitleBar accent={accent}>
      <Dots>
        <i />
        <i />
        <i />
      </Dots>
      <Title>{title}</Title>
      <Stripes />
    </TitleBar>
    <Body flush={flush}>{children}</Body>
  </WindowFrame>
);

/* ---------- Section heading: pixel index tag + big grotesk title ---------- */

const HeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ center }) => (center ? "center" : "flex-start")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  gap: 10px;
  margin-bottom: 48px;
`;

const Tag = styled.span`
  font-family: var(--font-pixel);
  font-size: 13px;
  padding: 4px 10px;
  border: 2px solid currentColor;
  letter-spacing: 1px;
`;

const H2 = styled.h2`
  font-size: clamp(40px, 7vw, 76px);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -2px;
  text-transform: lowercase;

  span {
    color: var(--orange);
  }
`;

export const SectionHeading = ({ index, children, center }) => (
  <HeadingWrap center={center}>
    <Tag>[{index}]</Tag>
    <H2>
      {children}
      <span>.</span>
    </H2>
  </HeadingWrap>
);
