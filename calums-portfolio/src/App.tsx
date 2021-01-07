import React from "react";
import "./App.css";
import { H1, P, FOOTER } from "./styles";

function App() {
  return (
    <div className="App">
      <header>
        <H1>Calum's Portfolio</H1>
        <FOOTER>
          <ul>
            <a href="https://github.com/CalumSmith2401">GitHub </a>
            <a href="https://www.linkedin.com/in/calum-smith-86a535203/">
              LinkedIn
            </a>
          </ul>
        </FOOTER>
        <P>
          Hi my name is Calum, I have been working with Climate Clever as an
          Intern for about a year while completing a diploma at TAFE. Over my
          programming journey i have learnt some Java, C# HTML, CSS and
          JavaScript(React).
        </P>
      </header>
    </div>
  );
}

export default App;
