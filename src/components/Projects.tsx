import "../App.css";
import { PORTFOLIO, H2, H3 } from "../styles";
import ConnectFourPortfolio from "../Images/ConnectFour.png";
import TodoListPortfolio from "../Images/TodoList.png";

function Projects() {
  return (
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
  );
}

export default Projects;
