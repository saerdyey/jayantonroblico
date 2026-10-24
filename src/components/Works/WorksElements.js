import styled from "styled-components";
import Card from "./Card";

export const WorksContainer = styled.section`
  padding: 110px 24px;
  background-color: var(--band-bg);
  background-image: linear-gradient(rgba(243, 234, 215, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(243, 234, 215, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  color: var(--band-fg);
  border-top: var(--border);
  border-bottom: var(--border);
  scroll-margin-top: 72px;

  @media screen and (max-width: 480px) {
    padding: 80px 16px;
  }
`;

export const WorksWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Cards = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCard = styled(Card)`
  display: flex;
  color: var(--ink);

  .card__link {
    display: flex;
    width: 100%;
    color: inherit;
    text-decoration: none;
    transition: transform 0.15s ease;
  }

  .card__link > div {
    width: 100%;
    box-shadow: 6px 6px 0 var(--orange);
    transition: box-shadow 0.15s ease;
  }

  a.card__link:hover {
    transform: translate(-4px, -4px);
  }

  a.card__link:hover > div {
    box-shadow: 10px 10px 0 var(--mustard);
  }

  .card__pic {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-bottom: var(--border);
    background: var(--paper-2);
  }

  .card__pic img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    display: block;
    transition: transform 0.3s ease, filter 0.3s ease;
    filter: grayscale(0.35) contrast(1.05);
  }

  .card__pic::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.08) 0 2px,
      transparent 2px 4px
    );
  }

  a.card__link:hover .card__pic img {
    transform: scale(1.06);
    filter: none;
  }

  .card__info {
    padding: 18px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card__label {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .card__text {
    font-size: 15px;
    line-height: 1.5;
    color: var(--ink-soft);
  }

  .card__badge {
    align-self: flex-start;
    font-family: var(--font-pixel);
    font-size: 11px;
    background: var(--orange);
    color: var(--on-accent);
    border: 2px solid var(--ink);
    padding: 3px 8px;
  }

  .card__stack {
    font-family: var(--font-term);
    font-size: 20px;
    color: var(--ink);
  }

  &.card--featured {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 900px) {
    &.card--featured .card__link > div > div:last-child {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
    }

    &.card--featured .card__pic {
      border-bottom: none;
      border-right: var(--border);
    }

    /* reversed featured cards: image on the right */
    &.card--reverse .card__link > div > div:last-child {
      grid-template-columns: 1fr 1.6fr;
    }

    &.card--reverse .card__pic {
      order: 2;
      border-right: none;
      border-left: var(--border);
    }

    &.card--featured .card__info {
      justify-content: center;
      padding: 32px;
      gap: 14px;
    }

    &.card--featured .card__label {
      font-size: clamp(32px, 3.5vw, 48px);
      letter-spacing: -1.5px;
    }

    &.card--featured .card__text {
      font-size: 17px;
    }
  }

  .card__cta {
    margin-top: 6px;
    font-family: var(--font-pixel);
    font-size: 12px;
    color: var(--teal);
  }
`;
