import "../App.css";
import { FOOTER } from "../styles";
import GitHubIcon from "../Images/GitHubIcon.svg";
import LinkedInIcon from "../Images/LinkedInIcon.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <FOOTER>
        <a href="https://github.com/CalumSmith2401" target="_blank">
          <img src={GitHubIcon} className="SocialMedia" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/calum-smith-86a535203/"
          target="_blank"
        >
          <img src={LinkedInIcon} className="SocialMedia" alt="linkedin" />
        </a>
      </FOOTER>
    </Router>
  );
}

export default Nav;
