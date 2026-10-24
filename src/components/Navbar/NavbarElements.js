import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background-color: var(--paper);
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: var(--border);
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 4px 0 rgba(22, 20, 18, 0.15)" : "none"};
  transition: box-shadow 0.2s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;

  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const NavLogo = styled(LinkR)`
  color: var(--ink);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-pixel);
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;

  &::after {
    content: "_";
    color: var(--orange);
    animation: blink 1s steps(1) infinite;
  }
`;

export const NavImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border: 2px solid var(--ink);
  background: var(--mustard);
  padding: 2px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--on-accent);
    background: var(--mustard);
    border: var(--border);
    box-shadow: 3px 3px 0 var(--ink);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLinks = styled(LinkS)`
  color: var(--ink);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 14px;
  font-family: var(--font-pixel);
  font-size: 14px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: background 0.15s ease;

  &:hover {
    border-color: var(--ink);
  }

  &.active {
    background: var(--chip-bg);
    color: var(--chip-fg);
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  background: var(--orange);
  color: var(--on-accent);
  border: var(--border);
  box-shadow: var(--shadow-sm);
  white-space: nowrap;
  padding: 9px 20px;
  font-family: var(--font-pixel);
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;

  &:hover {
    background: var(--mustard);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--ink);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--ink);
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const ThemeToggle = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  color: var(--ink);
  background: var(--cream);
  border: var(--border);
  box-shadow: 3px 3px 0 var(--ink);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;

  &:hover {
    background: var(--mint);
    color: var(--on-accent);
  }

  &:active {
    transform: translate(3px, 3px);
    box-shadow: 0 0 0 var(--ink);
  }
`;
