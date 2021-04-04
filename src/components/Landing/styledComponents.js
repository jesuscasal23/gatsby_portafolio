import styled from "styled-components"

const LandingContainer = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  font-family: "Poppins", Arial, sans-serif;
`
const FlexContainer = styled.div`
  display: flex;
`

const HeaderTextContainer = styled.h6`
  width: 90%;
  height: 100vh;
  color: black;
  padding-left: 10%;
`
const ColorText = styled.h6`
  color: #4a06a8;
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: 900;
  margin: 0;
  margin-top: 27vh;
  margin-bottom: 10px;
`

const HugeText = styled.h1`
  font-size: 80px;
  margin: 0;
  line-height: 1.2;
  margin-bottom: 30px;
`

const ImageContainer = styled.div`
  background-color: #4a06a8;
  width: 90%;
  height: 100vh;
  padding-right: 10%;
`
const ColorButton = styled.button`
  background-color: #4a06a8;
  cursor: pointer;
  color: white;
  padding: 16px 24px;
  border: none;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
`
const WhiteButton = styled.button`
  background-color: white;
  cursor: pointer;
  color: white;
  padding: 16px 24px;
  border: none;
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 700;
  color: black;
`

export {
  ColorText,
  LandingContainer,
  FlexContainer,
  ImageContainer,
  HeaderTextContainer,
  HugeText,
  ColorButton,
  WhiteButton,
}
