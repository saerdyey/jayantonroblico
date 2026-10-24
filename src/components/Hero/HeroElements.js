import { FaDownload, FaFileAlt } from "react-icons/fa";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const HeroInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 24px 88px;
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 56px;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 48px 16px 72px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
`;

export const HeroTag = styled.span`
  font-family: var(--font-pixel);
  font-size: 13px;
  background: var(--chip-bg);
  color: var(--chip-fg);
  padding: 6px 12px;
  margin-bottom: 24px;

  &::before {
    content: "●";
    color: #3ddc84;
    margin-right: 8px;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(52px, 9vw, 112px);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -3px;
  color: var(--ink);

  span {
    display: block;
    color: var(--orange);
    -webkit-text-stroke: 3px var(--ink);
    text-shadow: 6px 6px 0 var(--ink);
  }
`;

export const Terminal = styled.p`
  margin-top: 28px;
  font-family: var(--font-term);
  font-size: 26px;
  color: var(--teal);

  &::after {
    content: "█";
    margin-left: 4px;
    color: var(--ink);
    animation: blink 1s steps(1) infinite;
  }

  @media screen and (max-width: 480px) {
    font-size: 21px;
  }
`;

export const HeroP = styled.p`
  margin-top: 16px;
  font-size: 19px;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 520px;

  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

/* ---------- CRT monitor window ---------- */

export const Screen = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  background: #000;
  overflow: hidden;

  /* scanlines */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.28) 0 2px,
      transparent 2px 4px
    );
  }

  /* vignette */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    pointer-events: none;
    box-shadow: inset 0 0 80px rgba(0, 0, 0, 0.75);
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.25) contrast(1.1) sepia(0.15);
`;

export const Rec = styled.span`
  position: absolute;
  top: 12px;
  left: 14px;
  z-index: 3;
  font-family: var(--font-term);
  font-size: 22px;
  color: #fff;

  &::before {
    content: "●";
    color: var(--orange);
    margin-right: 6px;
    animation: blink 1.4s steps(1) infinite;
  }
`;

export const Sticker = styled.span`
  position: absolute;
  right: -14px;
  bottom: -18px;
  z-index: 4;
  font-family: var(--font-pixel);
  font-size: 13px;
  line-height: 1.2;
  text-align: center;
  background: var(--mustard);
  color: var(--on-accent);
  border: var(--border);
  box-shadow: var(--shadow-sm);
  padding: 10px 14px;
  transform: rotate(-6deg);

  @media screen and (max-width: 480px) {
    right: -6px;
  }
`;

export const MonitorWrap = styled.div`
  position: relative;
  transform: rotate(1.5deg);
  min-width: 0;

  @media screen and (max-width: 900px) {
    transform: none;
  }
`;

/* ---------- Ticker ---------- */

export const Ticker = styled.div`
  border-top: var(--border);
  border-bottom: var(--border);
  background: var(--band-bg);
  color: var(--band-fg);
  overflow: hidden;
  white-space: nowrap;
`;

export const TickerTrack = styled.div`
  display: inline-flex;
  animation: marquee 28s linear infinite;

  span {
    font-family: var(--font-pixel);
    font-size: 16px;
    padding: 12px 0;
  }

  span::after {
    content: "✦";
    color: var(--mustard);
    margin: 0 22px;
  }
`;

export const Download = styled(FaDownload)`
  margin-left: 10px;
  font-size: 16px;
`;

export const File = styled(FaFileAlt)`
  margin-left: 10px;
  font-size: 16px;
`;
