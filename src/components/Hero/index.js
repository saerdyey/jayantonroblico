import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Resume from "../../static/jay-anton-roblico-resume.pdf";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH3,
  HeroP,
  HeroBtnWrapper,
  File,
  Download,
} from "./HeroElements";
import Video from "../../videos/video.mp4";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Jay Anton Roblico</HeroH1>
        {/* <HeroH3>computer engineering student</HeroH3> */}
        <HeroP>I love software development :)</HeroP>
        <HeroP>
          currently seeking for an internship, open for freelance projects, and
          in training to be a full stack developer.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            href={Resume}
            target="_blank"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            See Resume {hover ? <Download /> : <File />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
