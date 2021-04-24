import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroButtonWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
import { Button } from "../ButtonElement";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} autoPlay loop muted type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Vote to your Favourite!</HeroH1>
        <HeroP>It puts people first, you get more honest data.</HeroP>
        <HeroButtonWrapper>
          <Button
            primary="true"
            dark="true"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
