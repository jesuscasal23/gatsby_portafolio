import styled from "styled-components"

const FooterContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  -webkit-box-shadow: -1px -9px 17px 1px #e065ff;
  -moz-box-shadow: -1px -9px 17px 1px #e065ff;
  box-shadow: -1px -9px 17px 1px #e065ff;
`

const FooterText = styled.div`
  padding: 10px 0;
  color: #e065ff;
  opacity: 0.9;
  margin: 10px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  font-family: "Nunito";
`

const FooterLink = styled.a`
  margin-right: 10px;
  margin-left: 10px;
  color: #e065ff;
  opacity: 0.9;
`

export { FooterContainer, FooterText, FooterLink }
