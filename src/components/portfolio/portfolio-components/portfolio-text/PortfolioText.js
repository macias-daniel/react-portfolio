import React from "react"
import "./PortfolioText.css"
const PortfolioText = ({ title, description, liveUrl, githubUrl }) => {
  return (
    <div className="textContentContainer">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={liveUrl} className="btn btn-outline-info linkBtn" target=" _blank">Live Site</a>
      <a href={githubUrl} className="btn btn-outline-info linkBtn" target=" _blank">
        <span>

        </span>Github Repo</a>
    </div>
  )
}

export default PortfolioText