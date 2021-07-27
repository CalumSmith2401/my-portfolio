import "../App.css";
import { LINK, BioDiv, H2, P1 } from "../styles";

function Header() {
  return (
    <body className="App-body">
      <BioDiv>
        <H2>Bio</H2>
        <P1>
          Hi my name is Calum, I have been working with
          <LINK href="https://www.climateclever.org/"> Climate Clever </LINK> as
          an Intern for about a year while completing a diploma at TAFE. Over my
          programming journey I have learnt some Java, C#, HTML, PHP, CSS and
          TypeScript and React. I am always looking for challenges and learning
          new things everyday by figuring out each problem as they arise.
        </P1>
      </BioDiv>
    </body>
  );
}

export default Header;
