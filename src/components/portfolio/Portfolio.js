import React from "react"
import "./Portfolio.css"
import Container from 'react-bootstrap/Container'
import PortfolioItem from "./portfolio-components/portfolio-item/PortfolioItem"


const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <Container className="portfolioContentContainer" >

        <PortfolioItem
          imgSrc={"https://via.placeholder.com/200x200"}
          title={"GhPort"}
          description={"Create a portfolio based off of your github repos with a couple clicks! Then with the link we provide you share your brrand new portfolio with whomever you would like."}
          liveUrl={"https://ghport.herokuapp.com/"}
          githubUrl={"https://github.com/ryan-harris/portfolio-builder"}
          hr={true}
        />

        <PortfolioItem
          imgSrc={"https://via.placeholder.com/200x200"}
          title={"BarHop"}
          description={"Create your own personalized barhopping route with BarHop. Search your area for new bars to explore, add them to your route, then go on your barhopping adventure!"}
          liveUrl={"https://ramonbarros.me/bar-hop-webapp/"}
          githubUrl={"https://github.com/ramonpbarros/bar-hop-webapp"}
          hr={true}
        />
        <PortfolioItem
          imgSrc={"https://via.placeholder.com/200x200"}
          title={"Eat Da Sushi"}
          description={"Simple, useless app flaunting it's full stack functionality! Create a Sushi type you would like to eat, then Nom Nom Nom it up!. "}
          liveUrl={"https://ancient-wave-10459.herokuapp.com/"}
          githubUrl={"https://github.com/macias-daniel/Eat-da-sushi"}
        />

      </Container>
    </div >
  )
}

export default Portfolio