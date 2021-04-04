import React from "react"
import "../components/styles.css"
import Greeting from "../components/Greeting"
import Navigation from "../components/Navigation"
import Cv from "../components/Cv"
import Projects from "../components/Projects"
import Form from "../components/Form"
import Footer from "../components/Footer"
import Landing from "../components/Landing"
import "@fontsource/nunito/400.css"
import "@fontsource/nunito/700.css"
import "@fontsource/nunito/900.css"

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/900.css"

export default function Home() {
  return (
    <>
      <Landing />
      <Greeting />
      <Cv />
      <div class="separatingLine"></div>
      <Projects />
      <div class="separatingLine" id="formtarget"></div>
      <Form />
      <Footer />
    </>
  )
}
