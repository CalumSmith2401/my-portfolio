/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import { H1, P, FOOTER, TABLE, H2, P1, BioDiv } from "./styles";
import avatar from "./AvatarMaker.svg";
import GitHubIcon from "./GitHubIcon.svg";
import LinkedInIcon from "./LinkedInIcon.svg";
import TreehousePortfolio from "./TreehouseNameSearcher.png";
import ConnectFourPortfolio from "./ConnectFour.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H1>Calum Smith</H1>
        <H2>Front End Javascript Developer</H2>
        <img src={avatar} className="Avatar" alt="avatar" />
      </header>
      <body className="App-header">
        <H2>Bio</H2>
        <BioDiv>
          <P1>
            Hi my name is Calum, I have been working with Climate Clever as an
            Intern for about a year while completing a diploma at TAFE. Over my
            programming journey I have learnt some Java, C#, HTML, PHP, CSS and
            JavaScript(React).
          </P1>
        </BioDiv>
        <H2>Projects:</H2>
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
