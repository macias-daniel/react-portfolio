import React from 'react';
import './App.css';
import Landing from "./components/landing/Landing"
import AboutMe from "./components/about-me/AboutMe"
import Portolio from "./components/portfolio/Portfolio"
function App() {
  return (
    <>
      <Landing />
      <Portolio />
      <AboutMe />
    </>
  );
}


export default App;
