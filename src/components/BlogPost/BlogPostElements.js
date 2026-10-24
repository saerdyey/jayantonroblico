import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostHeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 72px;
  display: flex;
  justify-content: center;
  background: var(--paper);
  border-bottom: var(--border);
`;

export const PostHeaderInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const BackLink = styled(Link)`
  font-family: var(--font-pixel);
  font-size: 13px;
  color: var(--ink);
  text-decoration: none;
  border: 2px solid var(--ink);
  padding: 9px 14px;
  white-space: nowrap;
  background: var(--cream);
  transition: background 0.15s ease;

  &:hover {
    background: var(--mustard);
    color: var(--on-accent);
  }

  @media screen and (max-width: 480px) {
    padding: 8px 10px;
    font-size: 11px;
  }
`;

export const Article = styled.main`
  max-width: 820px;
  margin: 0 auto;
  padding: 72px 24px 110px;

  @media screen and (max-width: 480px) {
    padding: 48px 16px 80px;
  }
`;

export const ArticleHead = styled.header`
  margin-bottom: 44px;

  h1 {
    margin-top: 18px;
    font-size: clamp(34px, 6vw, 60px);
    font-weight: 700;
    line-height: 1.02;
    letter-spacing: -2px;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 16px;
  margin-top: 22px;
  font-family: var(--font-term);
  font-size: 21px;
  color: var(--ink-soft);
`;

export const Kicker = styled.span`
  font-family: var(--font-pixel);
  font-size: 12px;
  border: 2px solid var(--ink);
  padding: 4px 10px;
`;

export const EndOfFile = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-family: var(--font-term);
  font-size: 22px;
  color: var(--teal);
`;
