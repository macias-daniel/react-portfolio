import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PortfolioImg from "../portfolio-img/PortfolioImg"
import "./PortfolioItem.css"

const PortfolioItem = ({ imgSrc, text }) => {
  return (
    <Row className="portfolioItem">
      <Col sm={4} className="imgCol">
        <PortfolioImg imgSrc={imgSrc} />
      </Col>
      <Col sm={9}>

      </Col>
    </Row>
  )
}

export default PortfolioItem