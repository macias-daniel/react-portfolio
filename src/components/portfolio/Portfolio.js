import React from "react"
import "./Portfolio.css"
import Container from 'react-bootstrap/Container'
import PortfolioItem from "./portfolio-components/portfolio-item/PortfolioItem"


const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <Container>
        <PortfolioItem
          imgSrc={"https://via.placeholder.com/300x200"}
          text={"Hi Hell Im Daniel"}
        />
        <PortfolioItem
          imgSrc={"https://via.placeholder.com/300x200"}
          text={"Hi Hell Im Daniel"}
        />
        <PortfolioItem
          imgSrc={"https://via.placeholder.com/300x200"}
          text={"Hi Hell Im Daniel"}
        />
      </Container>
    </div >
  )
}

export default Portfolio