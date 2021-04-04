import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Landing = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  max-width: 1400px;
  margin: 100px auto 0;
`

const ImageAndTextContainer = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: center;
  margin-bottom: 50px;
`

const StyledGatsbyImage = styled(GatsbyImage)`
  margin: 0px 20px;
  opacity: 0.85;
  border-radius: 10px;
`

const TextContainer = styled.div`
  width: 300px;
`

const MainTitle = styled.h1`
  font-weight: 900;
  font-size: 35px;
  line-height: 50px;
  margin: 0;
`
const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`

const ListElement = styled.li`
  margin-bottom: 20px;
  width: 300px;
  padding: 0;
  font-family: "Montserrat";
  font-size: 18px;
  line-height: 40px;
  font-weight: 500;
  margin: 0 0 10px 20px;
`

const Button = styled.button`
  background: linear-gradient(264.47deg, #e065ff -11.85%, #6500e4 100%);
  color: #ffffff;
  cursor: pointer;
  font-size: 2em;
  padding: 10px;
  border: 0;
  transition: all 0.5s;
  border-radius: 100px;
  width: 200px;
  margin-left: 50px;

  &:hover {
    background: #e065ff;
    transition: all 0.5s;
    border-radius: 100px;
    box-shadow: 0px 6px 15px #0000ff61;
    padding: 14px;
    width: 300px;
    margin-left: 0;
  }
`

const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
`

const Cube = styled.img`
  height: 400px;
  flex-grow: 1;
  overflow: hidden;
  opacity: 0.7;
`

export {
  Landing,
  ImageAndTextContainer,
  StyledGatsbyImage,
  TextContainer,
  MainTitle,
  ListContainer,
  ListElement,
  Button,
  ButtonLink,
  Cube,
}
