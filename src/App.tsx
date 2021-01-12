/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import { H1, P, FOOTER } from "./styles";
import avatar from "./AvatarMaker.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Calum's Portfolio</H1>
        <img src={avatar} width="200px" height="200px" />
        <P>
          Hi my name is Calum, I have been working with Climate Clever as an
          Intern for about a year while completing a diploma at TAFE. Over my
          programming journey I have learnt some Java, C#, HTML, PHP, CSS and
          JavaScript(React).
        </P>
        <br></br>
        <P>Projects:</P>
        <FOOTER>
          <a href="https://github.com/CalumSmith2401">GitHub </a>
          <a href="https://www.linkedin.com/in/calum-smith-86a535203/">
            LinkedIn
          </a>
        </FOOTER>
      </header>
    </div>
  );
}

export default App;
