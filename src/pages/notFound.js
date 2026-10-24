import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import SimpleHeader from "../components/SimpleHeader";
import { Window } from "../components/Retro";
import { Button } from "../components/ButtonElements";

const Main = styled.main`
  min-height: calc(100vh - 72px);
  max-width: 760px;
  margin: 0 auto;
  padding: 72px 24px 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 48px 16px 80px;
  }
`;

const BigCode = styled.p`
  font-size: clamp(96px, 22vw, 200px);
  font-weight: 700;
  line-height: 0.85;
  letter-spacing: -6px;
  color: var(--orange);
  -webkit-text-stroke: 3px var(--ink);
  text-shadow: 8px 8px 0 var(--ink);
  margin-bottom: 36px;
`;

const Dialog = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Warn = styled.span`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  font-family: var(--font-pixel);
  font-size: 28px;
  background: var(--mustard);
  color: var(--on-accent);
  border: var(--border);
`;

const Message = styled.div`
  h1 {
    font-size: clamp(22px, 3vw, 28px);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.25;
  }

  p {
    margin-top: 10px;
    font-size: 17px;
    line-height: 1.6;
    color: var(--ink-soft);
  }

  code {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9em;
    background: var(--paper-2);
    border: 1px solid var(--ink);
    padding: 1px 6px;
    color: var(--ink);
  }
`;

const Terminal = styled.div`
  margin-top: 22px;
  font-family: var(--font-term);
  font-size: 22px;
  color: var(--teal);
  overflow-wrap: anywhere;

  &::after {
    content: "█";
    margin-left: 4px;
    color: var(--ink);
    animation: blink 1s steps(1) infinite;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 26px;
`;

const NotFound = () => {
  const { pathname, search } = useLocation();
  const project = new URLSearchParams(search).get("project");

  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = "404 | jar";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const fileName = project
    ? project.toLowerCase().replace(/\s+/g, "_") + ".exe"
    : "error.log";

  return (
    <>
      <SimpleHeader backTo="/#projects" backLabel="← projects" />
      <Main>
        <BigCode aria-hidden="true">404</BigCode>
        <Window title={fileName} accent="var(--orange)">
          <Dialog>
            <Warn aria-hidden="true">!</Warn>
            <Message>
              {project ? (
                <>
                  <h1>
                    <code>{fileName}</code> has stopped responding.
                  </h1>
                  <p>
                    {project} is no longer online: the site has been retired.
                    The screenshot on the projects page is all that's left of
                    it.
                  </p>
                </>
              ) : (
                <>
                  <h1>This page doesn't exist.</h1>
                  <p>
                    The link might be broken, or the page may have moved. Head
                    back home and try from there.
                  </p>
                </>
              )}
              <Terminal>
                &gt; GET {project ? `/${fileName}` : pathname} → 404 Not Found
              </Terminal>
              <Actions>
                <Button primary as={Link} to="/#projects">
                  ← Back to projects
                </Button>
                <Button as={Link} to="/">
                  Go home
                </Button>
              </Actions>
            </Message>
          </Dialog>
        </Window>
      </Main>
      <Footer />
    </>
  );
};

export default NotFound;
