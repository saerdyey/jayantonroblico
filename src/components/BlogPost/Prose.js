import React, { useState } from "react";
import styled from "styled-components";

/* ---------- Article typography ---------- */

export const Prose = styled.div`
  font-size: 18px;
  line-height: 1.75;
  color: var(--ink);

  > * + * {
    margin-top: 20px;
  }

  h2 {
    margin-top: 48px;
    font-size: clamp(24px, 3vw, 30px);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;

    &::before {
      content: "#";
      font-family: var(--font-pixel);
      font-size: 0.75em;
      margin-right: 10px;
      color: var(--orange);
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    position: relative;
    padding-left: 22px;
  }

  li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--orange);
  }

  strong {
    font-weight: 700;
  }

  code {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85em;
    background: var(--paper-2);
    border: 1px solid var(--ink);
    padding: 1px 6px;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

/* ---------- Code block: a little terminal window ---------- */

const CodeFrame = styled.figure`
  border: var(--border);
  box-shadow: var(--shadow-sm);
  background: var(--band-bg);
  min-width: 0;
`;

const CodeBar = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 8px 6px 12px;
  background: var(--mint);
  color: var(--on-accent);
  border-bottom: var(--border);
  font-family: "JetBrains Mono", monospace;
  font-size: 13px;
  font-weight: 600;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const CopyButton = styled.button`
  flex-shrink: 0;
  font-family: var(--font-pixel);
  font-size: 11px;
  color: var(--on-accent);
  background: #fffaf0;
  border: 2px solid var(--on-accent);
  padding: 2px 8px;
  cursor: pointer;

  &:hover {
    background: var(--mustard);
  }
`;

const Pre = styled.pre`
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
  color: var(--band-fg);
  font-family: "JetBrains Mono", monospace;
  font-size: 14px;
  line-height: 1.65;
  tab-size: 2;

  code {
    font: inherit;
    background: none;
    border: none;
    padding: 0;
  }
`;

export const CodeBlock = ({ title, code }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <CodeFrame>
      <CodeBar>
        <span>{title}</span>
        <CopyButton type="button" onClick={copy}>
          {copied ? "copied!" : "copy"}
        </CopyButton>
      </CodeBar>
      <Pre>
        <code>{code}</code>
      </Pre>
    </CodeFrame>
  );
};

/* ---------- Callout ---------- */

export const Callout = styled.aside`
  border: var(--border);
  background: var(--mustard);
  color: var(--on-accent);
  padding: 14px 18px;
  font-size: 16px;
  line-height: 1.6;

  &::before {
    content: "TIP ";
    font-family: var(--font-pixel);
    font-size: 12px;
    margin-right: 6px;
  }

  code {
    background: #fffaf0;
    border-color: var(--on-accent);
    color: var(--on-accent);
  }
`;
