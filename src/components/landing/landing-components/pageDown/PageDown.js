import React from "react"
import "./PageDown.css"

const PageDown = () => {
  return (
    <div className="pagedown-container">
      <a href="about-me" id="pagedown">
        <p className="page-down-text">About Me</p>
        <ChevronDown />
      </a>
    </div>
  )
}


const ChevronDown = () => {
  return (
    <svg className="bi bi-chevron-down" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
    </svg>
  )

}

export default PageDown