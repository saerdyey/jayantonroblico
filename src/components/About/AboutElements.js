import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 110px 24px;
  scroll-margin-top: 72px;

  @media screen and (max-width: 480px) {
    padding: 80px 16px;
  }
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols || "1fr 1fr"};
  gap: 40px;
  align-items: ${({ align }) => align || "stretch"};

  & > * {
    min-width: 0;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutP = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }

  b {
    background: var(--mustard);
    color: var(--on-accent);
    padding: 0 4px;
  }
`;

export const Lead = styled.p`
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.5px;
  margin-bottom: 18px;

  em {
    font-style: normal;
    color: var(--orange);
  }
`;

export const Note = styled.p`
  font-family: var(--font-term);
  font-size: 22px;
  color: var(--teal);
  margin-top: 18px;
`;

/* ---------- Polaroid photos ---------- */

export const Photos = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Polaroid = styled.figure`
  background: var(--cream);
  border: var(--border);
  box-shadow: var(--shadow);
  padding: 12px 12px 0;
  width: ${({ small }) => (small ? "min(175px, 36%)" : "min(320px, 80%)")};
  transform: rotate(${({ tilt }) => tilt || 0}deg);
  transition: transform 0.2s ease;
  position: relative;
  z-index: ${({ z }) => z || 1};
  margin: ${({ overlap }) => (overlap ? "0 0 0 -24px" : "0")};

  &:hover {
    transform: rotate(0deg) scale(1.03);
    z-index: 5;
  }

  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border: 2px solid var(--ink);
    filter: contrast(1.05) saturate(0.9);
  }

  figcaption {
    font-family: var(--font-pixel);
    font-size: 12px;
    text-align: center;
    padding: 12px 4px 14px;
  }

  @media screen and (max-width: 480px) {
    margin: ${({ overlap }) => (overlap ? "0 0 0 -6px" : "0")};
    width: ${({ small }) => (small ? "31%" : "min(320px, 80%)")};
  }
`;

/* ---------- Timeline (education / work) ---------- */

export const Timeline = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const TimelineItem = styled.li`
  position: relative;
  padding-left: 26px;
  border-left: 3px dashed var(--ink);

  &::before {
    content: "";
    position: absolute;
    left: -9px;
    top: 4px;
    width: 15px;
    height: 15px;
    background: ${({ accent }) => accent || "var(--orange)"};
    border: 3px solid var(--ink);
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    margin: 6px 0 2px;
  }

  p {
    font-size: 15px;
    line-height: 1.5;
    color: var(--ink-soft);
  }
`;

export const DateChip = styled.span`
  display: inline-block;
  font-family: var(--font-pixel);
  font-size: 11px;
  background: var(--chip-bg);
  color: var(--chip-fg);
  padding: 3px 8px;
`;

export const Spotify = styled.div`
  margin: 6px 0 16px;
  border: var(--border);
  box-shadow: var(--shadow-sm);
  line-height: 0;
  background: var(--band-bg);

  iframe {
    display: block;
  }
`;

export const Interests = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 4px 0 18px;

  li {
    font-family: var(--font-pixel);
    font-size: 12px;
    border: 2px solid var(--ink);
    padding: 5px 10px;
    background: var(--paper);
  }

  li:nth-child(3n + 1) {
    background: var(--mustard);
    color: var(--on-accent);
  }
  li:nth-child(3n + 2) {
    background: var(--mint);
    color: var(--on-accent);
  }
`;

/* ---------- Stats (readme) ---------- */

export const Stats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 22px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    border: 2px solid var(--ink);
    background: var(--paper);
    padding: 10px 12px;
    min-width: 0;
  }

  li:nth-child(1) {
    background: var(--mustard);
    color: var(--on-accent);
  }
  li:nth-child(3) {
    background: var(--mint);
    color: var(--on-accent);
  }

  strong {
    display: block;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: -1px;
    line-height: 1;
  }

  span {
    display: block;
    margin-top: 6px;
    font-family: var(--font-pixel);
    font-size: 10px;
    line-height: 1.4;
  }
`;

/* ---------- Work history ---------- */

export const Jobs = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 36px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Job = styled.li`
  position: relative;
  padding: 18px 20px 20px;
  border: 2px solid var(--ink);
  background: var(--paper);
  min-width: 0;

  h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.3px;
    margin-top: 10px;
  }
`;

export const Company = styled.p`
  font-family: var(--font-term);
  font-size: 22px;
  color: var(--teal);
  margin: 2px 0 10px;
`;

export const NowBadge = styled.span`
  margin-left: 8px;
  font-family: var(--font-pixel);
  font-size: 10px;
  background: var(--orange);
  color: var(--on-accent);
  border: 2px solid var(--ink);
  padding: 2px 6px;
  vertical-align: middle;
`;

export const Highlights = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    position: relative;
    padding-left: 18px;
    font-size: 15px;
    line-height: 1.5;
  }

  li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--orange);
  }

  b {
    background: var(--mustard);
    color: var(--on-accent);
    padding: 0 3px;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;

  li {
    font-family: var(--font-pixel);
    font-size: 10px;
    background: var(--chip-bg);
    color: var(--chip-fg);
    padding: 3px 7px;
  }
`;

/* ---------- Certificates ---------- */

export const CertList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.35;
    border: 2px solid var(--ink);
    background: var(--paper);
    padding: 10px 12px;
  }

  li::before {
    content: "✓";
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 700;
    background: var(--teal);
    color: var(--on-teal);
    border: 2px solid var(--ink);
  }
`;

export const SubHead = styled.h5`
  font-family: var(--font-pixel);
  font-size: 12px;
  font-weight: 400;
  margin: 22px 0 10px;
`;
