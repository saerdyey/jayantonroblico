import styled from "styled-components";

export const Button = styled.a`
  background: ${({ primary }) => (primary ? "var(--orange)" : "var(--cream)")};
  color: ${({ primary }) => (primary ? "var(--on-accent)" : "var(--ink)")};
  border: var(--border);
  box-shadow: var(--shadow-sm);
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 40px" : "12px 22px")};
  font-family: var(--font-pixel);
  font-size: ${({ fontBig }) => (fontBig ? "18px" : "15px")};
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;
  text-decoration: none;

  &:hover {
    background: var(--mustard);
    color: var(--on-accent);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--ink);
  }

  &:active {
    transform: translate(4px, 4px);
    box-shadow: 0 0 0 var(--ink);
  }
`;
