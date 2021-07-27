import "../App.css";
import { SkillsBody, H1, H2 } from "../styles";

import GitHubIcon from "../Images/GitHubIcon.svg";
import JavaScriptIcon from "../Images/JavaScriptIcon.svg";
import HTMLIcon from "../Images/HTMLIcon.png";
import CSSIcon from "../Images/CSSIcon.png";
import ReactIcon from "../Images/ReactIcon.png";
import TypeScriptIcon from "../Images/TypeScriptIcon.png";

function Skills() {
  return (
    <SkillsBody>
      <H2>Skills</H2>
      <img src={JavaScriptIcon} className="img" width="60px" height="60px" />
      <img src={HTMLIcon} className="img" width="60px" height="60px" />
      <img src={CSSIcon} className="img" width="60px" height="60px" />
      <img src={ReactIcon} className="img" width="60px" height="60px" />
      <img src={TypeScriptIcon} className="img" width="60px" height="60px" />
      <img src={GitHubIcon} className="img" width="60px" height="60px" />
    </SkillsBody>
  );
}

export default Skills;
