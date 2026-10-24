import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { Window } from "../Retro";
import Resume from "../../static/jay-anton-roblico-resume.pdf";
import {
  HeroContainer,
  HeroInner,
  HeroContent,
  HeroTag,
  HeroH1,
  Terminal,
  HeroP,
  HeroBtnWrapper,
  MonitorWrap,
  Screen,
  VideoBg,
  Rec,
  Sticker,
  Ticker,
  TickerTrack,
  File,
  Download,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const tickerItems = [
  "open for work",
  "backend",
  "web & mobile",
  "devops",
  "freelance",
  "open source",
  "coffee powered",
];

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroInner>
        <HeroContent>
          <HeroTag>available for hire</HeroTag>
          <HeroH1>
            Jay Anton
            <span>Roblico</span>
          </HeroH1>
          <Terminal>$ software developer :)</Terminal>
          <HeroP>
            I love software development. Currently seeking a developer
            position, and open for freelance and open-source projects.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              primary
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              See Resume {hover ? <Download /> : <File />}
            </Button>
            <Button href="#projects">View Projects</Button>
          </HeroBtnWrapper>
        </HeroContent>

        <MonitorWrap>
          <Window title="jar_tv.mp4" accent="var(--teal)" flush>
            <Screen>
              <VideoBg
                autoPlay
                loop
                muted
                playsInline
                src={Video}
                type="video/mp4"
              />
              <Rec>REC</Rec>
            </Screen>
          </Window>
          <Sticker>
            hand
            <br />
            coded ♥
          </Sticker>
        </MonitorWrap>
      </HeroInner>

      <Ticker aria-hidden="true">
        <TickerTrack>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </TickerTrack>
      </Ticker>
    </HeroContainer>
  );
};

export default Hero;
