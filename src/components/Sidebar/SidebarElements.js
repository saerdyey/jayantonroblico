import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: var(--paper);
  background-image: radial-gradient(var(--dot) 1px, transparent 1px);
  background-size: 22px 22px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  left: 0;
  overflow: hidden;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: var(--on-accent);
`;

export const Icon = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  border: var(--border);
  box-shadow: 3px 3px 0 var(--ink);
  font-size: 1.3rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: var(--ink);
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 76px);
  text-align: center;
  margin-bottom: 32px;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -1px;
  text-transform: lowercase;
  text-decoration: none;
  list-style: none;
  transition: 0.15s ease-in-out;
  color: var(--ink);
  cursor: pointer;

  &::before {
    content: ">";
    font-family: var(--font-pixel);
    font-size: 1.2rem;
    margin-right: 12px;
    color: var(--orange);
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  &:hover {
    color: var(--teal);
  }
  &:hover::before {
    opacity: 1;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.button`
  background: var(--orange);
  color: var(--on-accent);
  border: var(--border);
  box-shadow: var(--shadow-sm);
  padding: 16px 64px;
  font-family: var(--font-pixel);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;

  &:hover {
    background: var(--mustard);
  }
  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--ink);
  }
`;
