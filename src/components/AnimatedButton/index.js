import React from "react"
import {
  ButtonAnimationWrapper,
  Button,
  TopSpan,
  RightSpan,
  BottomSpan,
  LeftSpan,
} from "./styledComponents"

const AnimatedButton = ({ text, direction }) => {
  return (
    <ButtonAnimationWrapper>
      <TopSpan direction={direction} />
      <RightSpan direction={direction} />
      <BottomSpan direction={direction} />
      <LeftSpan direction={direction} />
      <Button>{text}</Button>
    </ButtonAnimationWrapper>
  )
}

export default AnimatedButton
