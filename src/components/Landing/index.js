import React from "react"
import {
  LandingContainer,
  HeaderTextContainer,
  FlexContainer,
  ImageContainer,
  ColorText,
  HugeText,
  ColorButton,
  WhiteButton,
} from "./styledComponents"
import AnimatedButton from "../AnimatedButton"

const Landing = () => {
  return (
    <LandingContainer>
      <FlexContainer>
        <HeaderTextContainer>
          <ColorText>Javascript Developer</ColorText>
          <HugeText>
            I'm Jesus <br /> Casal
          </HugeText>
          <AnimatedButton text="About Me" direction="right"></AnimatedButton>
          <AnimatedButton text="Contact Me" direction="right"></AnimatedButton>
        </HeaderTextContainer>
        <ImageContainer></ImageContainer>
      </FlexContainer>
    </LandingContainer>
  )
}

export default Landing
