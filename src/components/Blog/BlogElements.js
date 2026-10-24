import styled from "styled-components";
import { Link } from "react-router-dom";

export const BlogContainer = styled.section`
  padding: 110px 24px;
  border-top: var(--border);
  scroll-margin-top: 72px;

  @media screen and (max-width: 480px) {
    padding: 80px 16px;
  }
`;

export const BlogWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const PostList = styled.ol`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const PostRow = styled(Link)`
  display: grid;
  grid-template-columns: 170px 1fr auto;
  gap: 28px;
  align-items: center;
  padding: 24px 28px;
  background: var(--cream);
  color: var(--ink);
  border: var(--border);
  box-shadow: var(--shadow);
  text-decoration: none;
  transition: transform 0.12s ease, box-shadow 0.12s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 9px 9px 0 var(--orange);
  }

  &:hover .post__arrow {
    background: var(--orange);
    transform: translateX(4px);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 20px;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-family: var(--font-term);
  font-size: 20px;
  color: var(--ink-soft);

  @media screen and (max-width: 720px) {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const PostBody = styled.div`
  min-width: 0;

  h3 {
    font-size: clamp(22px, 2.6vw, 28px);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    line-height: 1.55;
    color: var(--ink-soft);
  }
`;

export const PostTags = styled.ul`
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

export const Arrow = styled.span`
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-size: 22px;
  color: var(--on-accent);
  background: var(--mustard);
  border: var(--border);
  transition: transform 0.12s ease, background 0.12s ease;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
