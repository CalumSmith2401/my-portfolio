/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// Styles
import "./App.css";
import {
  H1,
  FOOTER,
  PORTFOLIO,
  H2,
  P1,
  P2,
  BioDiv,
  EXAMPLES,
  SkillsBody,
  H3,
} from "./styles";

// Images
import avatar from "./Images/AvatarMaker.svg";
import GitHubIcon from "./Images/GitHubIcon.svg";
import LinkedInIcon from "./Images/LinkedInIcon.svg";
import JavaScriptIcon from "./Images/JavaScriptIcon.svg";
import HTMLIcon from "./Images/HTMLIcon.png";
import CSSIcon from "./Images/CSSIcon.png";
import ReactIcon from "./Images/ReactIcon.png";
import TypeScriptIcon from "./Images/TypeScriptIcon.png";
import Leaderboard from "./Images/Leaderboards.png";
import LeaderboardMobile from "./Images/LeaderboardMobile.png";
// Portfolio Examples
import ConnectFourPortfolio from "./Images/ConnectFour.png";
import TodoListPortfolio from "./Images/TodoList.png";

function App() {
  return (
    <div className="App">
      <header className="App-body">
        <H1>Calum Smith</H1>
        <H2>Full Stack Junior JavaScript Developer</H2>
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
      </body>
      <body className="App-portfolio">
        <H2>Projects</H2>
        <PORTFOLIO>
          <div>
            <H3>Connect Four</H3>
            <a href="https://trusting-hodgkin-a6c0c6.netlify.app/">
              <img
                src={ConnectFourPortfolio}
                alt="connectFour"
                className="portfolio"
                width="350px"
                height="200px"
              />
            </a>
          </div>
          <div>
            <H3>To Do List</H3>
            <a href="https://dazzling-hopper-974d18.netlify.app/">
              <img
                src={TodoListPortfolio}
                alt="todolist"
                className="portfolio"
                width="350px"
                height="200px"
              />
            </a>
          </div>
        </PORTFOLIO>
      </body>
      <EXAMPLES>
        <H2>Climate Clever Internship Work</H2>
        <div className="example">
          <div className="leaderboardText">
            <P2>
              While doing an Internship Program at Climate Clever one of my
              projects was to create and maintain there Leaderboards. The
              Leaderboard had to be created in a interactive and fun way to keep
              users interested and engaged.
            </P2>
          </div>
          <img
            src={Leaderboard}
            className="leaderboard"
            width="425px"
            height="300px"
          />
          <img
            src={LeaderboardMobile}
            className="leaderboard"
            width="120px"
            height="300px"
          />
        </div>
      </EXAMPLES>
      <SkillsBody>
        <H2>Skills</H2>
        <img src={JavaScriptIcon} className="img" width="60px" height="60px" />
        <img src={HTMLIcon} className="img" width="60px" height="60px" />
        <img src={CSSIcon} className="img" width="60px" height="60px" />
        <img src={ReactIcon} className="img" width="60px" height="60px" />
        <img src={TypeScriptIcon} className="img" width="60px" height="60px" />
        <img src={GitHubIcon} className="img" width="60px" height="60px" />
      </SkillsBody>
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
