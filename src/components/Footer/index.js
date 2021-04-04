import React from "react"
import { FooterContainer, FooterLink, FooterText } from "./styledComponents"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Programed by <em> Jesus Casal </em> and designed by
        <FooterLink href="https://roxanahiggins.netlify.app/">
          Roxana higgins
        </FooterLink>
      </FooterText>
      <FooterText>
        Code for this website:
        <FooterLink href="https://github.com/jesuscasal23/personal-webpage">
          here
        </FooterLink>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
