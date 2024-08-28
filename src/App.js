import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Skills from "./Skills";
import Contact from "./Contact";
import Home from "./Home";
import Qualification from "./Qualification";
import Projects from "./Projects";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MoreAboutMe from "./MoreAboutMe";


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <MoreAboutMe />
        <Qualification />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
