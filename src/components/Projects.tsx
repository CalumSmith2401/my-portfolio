import "../App.css";
import { PORTFOLIO, PortfolioItems, PortfolioDiv, H2, H3 } from "../styles";
import ConnectFourPortfolio from "../Images/ConnectFour.png";
import TodoListPortfolio from "../Images/TodoList.png";
import AndroidTVPortfolio from "../Images/AndroidTV.png";

function Projects() {
  return (
    <body className="App-portfolio">
      <PORTFOLIO>
        <H2>Projects</H2>
        <PortfolioDiv>
          <PortfolioItems>
            <H3>Connect Four</H3>
            <a
              href="https://trusting-hodgkin-a6c0c6.netlify.app/"
              target="_blank"
            >
              <img
                src={ConnectFourPortfolio}
                alt="connectFour"
                className="portfolio"
                width="350px"
                height="200px"
              />
            </a>
          </PortfolioItems>
          <PortfolioItems>
            <H3>To Do List</H3>
            <a
              href="https://dazzling-hopper-974d18.netlify.app/"
              target="_blank"
            >
              <img
                src={TodoListPortfolio}
                alt="androidtv"
                className="portfolio"
                width="350px"
                height="200px"
              />
            </a>
          </PortfolioItems>
          <PortfolioItems>
            <H3>Android TV IOT System</H3>
            <a href="https://hub.corpcloud.com.au" target="_blank">
              <img
                src={AndroidTVPortfolio}
                alt="todolist"
                className="portfolio"
                width="350px"
                height="200px"
              />
            </a>
          </PortfolioItems>
        </PortfolioDiv>
      </PORTFOLIO>
    </body>
  );
}

export default Projects;
