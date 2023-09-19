import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Personality from "../components/Personality";
import Contact from "../components/Contact";
import React from "react";

function Index() {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
      <div id="section1">
        <Projects />
      </div>
      <div id="section2">
        <Skills />
      </div>
      <div id="section3">
        <Personality />
      </div>
      <div id="section4">
        <Contact />
      </div>
    </div>
  );
}

export default Index;
