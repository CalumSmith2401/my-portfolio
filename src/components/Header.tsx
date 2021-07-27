import "../App.css";
import { H1, H2 } from "../styles";
import HoverImage from "react-hover-image";

import avatar from "../Images/Avatar.png";
import avatarHappy from "../Images/AvatarHappy.png";

function Header() {
  return (
    <header className="App-header">
      <H1>Calum Smith</H1>
      <H2>Junior Software Developer</H2>
      <HoverImage className="Avatar" src={avatar} hoverSrc={avatarHappy} />
    </header>
  );
}

export default Header;
