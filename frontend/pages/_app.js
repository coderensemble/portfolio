import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Personality from "../components/Personality";
import Contact from "../components/Contact";

function App() {
  return (
      <div>
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Personality />
        <Contact />
      </div>
  );
}

export default App;
