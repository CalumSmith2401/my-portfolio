/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Styles
import "../App.css";

import Header from "./Header";
import Bio from "./Bio";
import Projects from "./Projects";
import WorkExp from "./WorkExperience";
import Skills from "./Skills";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Projects />
      <WorkExp />
      <Skills />
      <Nav />
    </div>
  );
}

export default App;
