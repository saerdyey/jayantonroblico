import styled from "styled-components";

export const TechsContainer = styled.section`
  padding: 110px 24px;
  scroll-margin-top: 72px;

  @media screen and (max-width: 480px) {
    padding: 80px 16px;
  }
`;

export const TechsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

/* keyboard deck */
export const Deck = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px 32px;
  padding: 28px;
  background: var(--paper-2);
  border: var(--border);
  box-shadow: var(--shadow);

  @media screen and (max-width: 720px) {
    padding: 18px;
    gap: 22px;
  }
  @media screen and (max-width: 480px) {
    padding: 14px;
  }
`;

export const Group = styled.div`
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 0;

  /* desktop: groups size to their keys so short ones share a row */
  @media screen and (min-width: 1180px) {
    flex: 0 0 auto;
  }
`;

export const GroupLabel = styled.h3`
  align-self: flex-start;
  font-family: var(--font-pixel);
  font-size: 12px;
  font-weight: 400;
  background: var(--chip-bg);
  color: var(--chip-fg);
  padding: 4px 10px;

  &::before {
    content: "> ";
    color: var(--orange);
  }
`;

/* desktop: one fixed-size key per column (--cols set per group);
   smaller screens: keys wrap at a consistent size */
export const Keys = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 14px;

  @media screen and (min-width: 1180px) {
    grid-template-columns: repeat(var(--cols), 96px);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    gap: 10px;
  }
`;

export const TechBox = styled.li`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: var(--ink);
  background: var(--cream);
  border: var(--border);
  border-radius: 10px;
  box-shadow: 0 6px 0 var(--ink);
  transition: transform 0.08s ease, box-shadow 0.08s ease, background 0.15s ease;
  cursor: default;
  min-width: 0;

  svg {
    width: 38%;
    height: auto;
    max-width: 44px;
  }

  &:nth-child(4n + 1),
  &:nth-child(7n + 3),
  &:hover {
    color: var(--on-accent);
  }
  &:nth-child(4n + 1) {
    background: var(--mustard);
  }
  &:nth-child(7n + 3) {
    background: var(--mint);
  }

  &:hover {
    transform: translateY(6px);
    box-shadow: 0 0 0 var(--ink);
    background: var(--orange);
  }
`;

export const Monogram = styled.span`
  font-family: var(--font-pixel);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`;

export const TechH3 = styled.span`
  font-family: var(--font-pixel);
  font-size: 9px;
  line-height: 1.25;
  text-align: center;
  padding: 0 6px;
  max-width: 100%;
  overflow-wrap: anywhere;
`;
