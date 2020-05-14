import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PortfolioImg from "../portfolio-img/PortfolioImg"
import PortfolioText from "../portfolio-text/PortfolioText"
import "./PortfolioItem.css"


const PortfolioItem = ({ imgSrc, title, description, liveUrl, githubUrl, hr }) => {
  console.log(hr)
  return (
    <div>
      <Row className="portfolioItem">
        <Col md={4} className="imgCol">
          <PortfolioImg imgSrc={imgSrc} />
        </Col>
        <Col smd={8}>
          <PortfolioText title={title} description={description} githubUrl={githubUrl} liveUrl={liveUrl} />
        </Col>
      </Row >
      {hr && <hr className="hr" />}
    </div>
  )
}

export default PortfolioItem