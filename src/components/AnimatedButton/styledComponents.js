import styled, { keyframes } from "styled-components"

/* holds the actual button and the animated span that rotate around */
const ButtonAnimationWrapper = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #4a06a8;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 10px;
  letter-spacing: 4px;
  margin-right: 30px;
  border: 4px solid transparent;
  border: transparent solid 2px;
  outline: none;

  &:hover {
    border: #4a06a8 solid 2px;
  }

  &:active {
    outline: none;
    border: none;
  }
`

const Button = styled.button`
  color: #4a06a8;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 4px;
  background-color: transparent;
  border: none;
  transition: 0.5s;
  outline: none;

  &:active {
    outline: none;
  }
`
/* span animations */

/* Top animation */
const TopAnimation = direction => {
  const from = direction === "right" ? "-100%" : "100%"
  const to = direction === "right" ? "100%" : "-100%"

  return keyframes`
  from {
    left: ${from};
  }

  to {
    left: ${to};
  }
`
}

const AnimationSpan = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;

  ${ButtonAnimationWrapper}:hover & {
    animation-play-state: paused;
    display: none;
  }
`

const TopSpan = styled(AnimationSpan)`
  top: 0;
  left: -100%;
  background: linear-gradient(90deg, transparent, #4a06a8);
  animation: ${props => TopAnimation(props.direction)} 1.5s linear infinite;
  animation-delay: 1.5s;
`
/* Right animation */
const RightAnimation = direction => {
  const from = direction === "right" ? "-100%" : "100%"
  const to = direction === "right" ? "100%" : "-100%"

  return keyframes`
  from {
    top: ${from};
  }

  to {
    top: ${to};
  }
`
}

const RightSpan = styled(AnimationSpan)`
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #4a06a8);
  animation: ${props => RightAnimation(props.direction)} 1.5s linear infinite;
  animation-delay: 2.25s;
`

/* Bottom animation */
const BottomAnimation = direction => {
  const from = direction === "right" ? "-100%" : "100%"
  const to = direction === "right" ? "100%" : "-100%"
  return keyframes`
  from {
    right: ${from};
  }
  to {
    right: ${to};
  }
`
}

const BottomSpan = styled(AnimationSpan)`
  bottom: 0;
  right: -100%;
  background: linear-gradient(270deg, transparent, #4a06a8);
  animation: ${props => BottomAnimation(props.direction)} 1.5s linear infinite;
`
/* Left animation */

const LeftAnimation = direction => {
  const from = direction === "right" ? "-100%" : "100%"
  const to = direction === "right" ? "100%" : "-100%"
  return keyframes`
  from {
    bottom: ${from};
  }
  to {
    bottom: ${to};
  }
`
}

const LeftSpan = styled(AnimationSpan)`
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #4a06a8);
  animation: ${props => LeftAnimation(props.direction)} 1.5s linear infinite;
  animation-delay: 0.75s;
`

export {
  ButtonAnimationWrapper,
  Button,
  TopSpan,
  RightSpan,
  BottomSpan,
  LeftSpan,
}
