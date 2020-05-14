import React from "react"
import "./Landing.css"
import Title from "./landing-components/title/Title"
import PageDown from "./landing-components/pageDown/PageDown"


const Landing = () => {
  return (
    <div className="landingContainer">
      <Title />
      <PageDown />
    </div>
  )
}

export default Landing