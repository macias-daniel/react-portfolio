import React from "react"
import "./AboutMe.css"
import AboutMeImage from "./about-me-components/about-me-image/AboutMeImage"
import AboutMeText from "./about-me-components/about-me-text/AboutMeText"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <Container className="aboutMeContentContainer" >
        <Row>
          <Col md={6} className="imgCol">
            <AboutMeImage />
          </Col>
          <Col md={6} className="textCol">
            <AboutMeText />
          </Col>
        </Row >
      </Container>
    </div>
  )
}

export default AboutMe