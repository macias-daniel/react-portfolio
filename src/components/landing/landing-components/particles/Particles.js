import React from "react"
import Particles from "react-particles-js"
import "./Particles.css"



const ParticlesContainer = ({ children }) => {
  return (
    <Particles
      className="particlesContainer"
      params={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3
          }
        }
      }} >
      {children}
    </Particles>
  )
}

export default ParticlesContainer