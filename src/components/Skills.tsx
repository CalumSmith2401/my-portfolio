import "../App.css";
import { SkillsBody, H2 } from "../styles";

import GitHubIcon from "../Images/GitHubIcon.svg";
import JavaScriptIcon from "../Images/JavaScriptIcon.svg";
import HTMLIcon from "../Images/HTMLIcon.png";
import CSSIcon from "../Images/CSSIcon.png";
import ReactIcon from "../Images/ReactIcon.png";
import TypeScriptIcon from "../Images/TypeScriptIcon.png";
import AWSIcon from "../Images/AWSIcon.png";
import GitLabIcon from "../Images/GitLabIcon.png";

function Skills() {
  return (
    <SkillsBody>
      <H2>Skills</H2>
      <img
        src={JavaScriptIcon}
        className="img"
        alt=""
        width="60px"
        height="60px"
      />
      <img src={HTMLIcon} className="img" alt="" width="60px" height="60px" />
      <img src={CSSIcon} className="img" alt="" width="60px" height="60px" />
      <img src={ReactIcon} className="img" alt="" width="60px" height="60px" />
      <img
        src={TypeScriptIcon}
        className="img"
        alt=""
        width="60px"
        height="60px"
      />
      <img src={GitHubIcon} className="img" alt="" width="60px" height="60px" />
      <img src={AWSIcon} className="img" alt="" width="80px" height="60px" />
      <img src={GitLabIcon} className="img" alt="" width="60px" height="60px" />
    </SkillsBody>
  );
}

export default Skills;
