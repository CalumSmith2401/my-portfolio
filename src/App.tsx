/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import { H1, P, FOOTER, TABLE } from "./styles";
import avatar from "./AvatarMaker.svg";
import GitHubIcon from "./GitHubIcon.svg";
import LinkedInIcon from "./LinkedInIcon.svg";
import TreehousePortfolio from "./TreehouseNameSearcher.png";
import ConnectFourPortfolio from "./ConnectFour.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Calum's Portfolio</H1>
        <P>
          <img src={avatar} width="200px" height="200px" />
        </P>
      </header>
      <body className="App-header">
        <P>
          Hi my name is Calum, I have been working with Climate Clever as an
          Intern for about a year while completing a diploma at TAFE. Over my
          programming journey I have learnt some Java, C#, HTML, PHP, CSS and
          JavaScript(React).
        </P>
        <P>Projects:</P>
        <TABLE>
          <tr>
            <th>
              <P>Treehouse Name Searcher</P>
              <img
                src={TreehousePortfolio}
                alt="treehouseNameSearcher"
                width="350px"
                height="200px"
              />
            </th>
            <th>
              <P>Connect Four</P>
              <img
                src={ConnectFourPortfolio}
                alt="connectFour"
                width="350px"
                height="200px"
              />
            </th>
          </tr>
        </TABLE>
      </body>
      <FOOTER>
        <a href="https://github.com/CalumSmith2401">
          <img src={GitHubIcon} className="SocialMedia" alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/calum-smith-86a535203/">
          <img src={LinkedInIcon} className="SocialMedia" alt="linkedin" />
        </a>
      </FOOTER>
    </div>
  );
}

export default App;
