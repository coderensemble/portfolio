import "../styles/globals.css";
import Head from "next/head";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function App() {
  return (
      <div>
        <Home />
        <Projects />
        <Skills />
      </div>
  );
}

export default App;
