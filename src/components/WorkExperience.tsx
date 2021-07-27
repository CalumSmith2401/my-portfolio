import "../App.css";
import { EXAMPLES, H2, H3, P2 } from "../styles";
import Leaderboard from "../Images/Leaderboards.png";
import LeaderboardMobile from "../Images/LeaderboardMobile.png";
import AndroidTV from "../Images/AndroidTV.png";

function WorkExp() {
  return (
    <EXAMPLES>
      <H2>Work Experience</H2>
      <H3>Climate Clever Internship</H3>
      <div className="example">
        <P2>
          While doing an Internship Program at Climate Clever one of my projects
          was to create and maintain there Leaderboards. The Leaderboard had to
          be created in a interactive and fun way to keep users interested and
          engaged.
        </P2>
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
      <H3>CorpCloud Research and Development Associate</H3>
      <div className="example">
        <img
          src={AndroidTV}
          className="leaderboard"
          width="700px"
          height="300px"
        />
        <P2>
          While being at CorpCloud I created an IOT management device which
          scans a certain IP range and connects to TV's in that area and
          displays apps depending on what is selected by the user.
        </P2>
      </div>
    </EXAMPLES>
  );
}

export default WorkExp;
