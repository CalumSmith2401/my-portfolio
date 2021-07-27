import "../App.css";
import { BioDiv, H2, P1 } from "../styles";

function Header() {
  return (
    <body className="App-body">
      <BioDiv>
        <H2>Bio</H2>
        <P1>
          Hi my name is Calum, I have been working as an Software Developer for
          about a year and a half. Before working as a Software Developer I
          completed a diploma of Software Development at TAFE. Over my
          programming journey I have learnt some Java, C#, HTML, PHP, CSS,
          TypeScript and React. I am always looking for challenges and learning
          new things everyday by figuring out each problem as they arise.
        </P1>
      </BioDiv>
    </body>
  );
}

export default Header;
