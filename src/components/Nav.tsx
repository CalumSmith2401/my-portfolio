import "../App.css";
import { FOOTER } from "../styles";
import GitHubIcon from "../Images/GitHubIcon.svg";
import LinkedInIcon from "../Images/LinkedInIcon.svg";

function Nav() {
  return (
    <FOOTER>
      <a href="https://github.com/CalumSmith2401">
        <img src={GitHubIcon} className="SocialMedia" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/calum-smith-86a535203/">
        <img src={LinkedInIcon} className="SocialMedia" alt="linkedin" />
      </a>
    </FOOTER>
  );
}

export default Nav;
