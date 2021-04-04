import React from "react"
import {
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
} from "./styledComponents"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import cubeImg from "../../images/cube.svg"

const getImages = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpeg" }) {
      childImageSharp {
        gatsbyImageData(height: 400)
      }
    }
  }
`

const Greeting = () => {
  const data = useStaticQuery(getImages)
  const profileImg = getImage(data.profile)
  return (
    <Landing>
      <ImageAndTextContainer>
        <StyledGatsbyImage image={profileImg} alt="portrait Jesus Casal" />
        <TextContainer>
          <MainTitle>
            Hello! <br />
            Im Jesus,
            <br />
            Web developer.
          </MainTitle>
          <ListContainer>
            <ListElement>
              study political economics at the university of heidelberg
            </ListElement>
            <ListElement>
              looking for a paid internship as a frontend web developer
            </ListElement>
          </ListContainer>
          <Button>
            <ButtonLink href="#formtarget">Contact Me</ButtonLink>
          </Button>
        </TextContainer>
      </ImageAndTextContainer>

      <Cube src={cubeImg} alt="cube" />
    </Landing>
  )
}

export default Greeting
