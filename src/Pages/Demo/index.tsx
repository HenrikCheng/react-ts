import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import Text from "../../components/Text";

import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";
import tretton37 from "../../images/tretton37.png";
import PortfolioPic from "../../images/portfolio.png";
import Mirjaleipoo from "../../images/mirjaleipoo.png";
import People from "../../images/1337-people.png";

const Demo: React.FC<{}> = (props) => {
  const projects = [
    {
      href: "https://henrikcheng.github.io/react-ts",
      imageSrc: PortfolioPic,
      imageAlt: "Henriks portfolio page",
      header: "demo_portfolio_title",
      description: "demo_portfolio_description",
      techStack: ["Typescript", "React", "React-Intl", "OpenLayers maps"],
    },
    {
      href: "https://www.tretton37.com/",
      imageSrc: tretton37,
      imageAlt: "tretton37 website",
      header: "demo_portfolio_title",
      description: "demo_tretton_description",
      techStack: ["Webflow", "HTML", "JS", "CSS", "Kanban", "Figma"],
    },
    {
      href: "https://henrikcheng.github.io/1337-people",
      imageSrc: People,
      imageAlt: "Company employees of tretton37",
      githubLink: "https://github.com/HenrikCheng/1337-people",
      header: "demo_portfolio_title",
      description: "demo_leetpeople_description",
      techStack: ["React", "Query params", "Debounce", "Tailwind", "REST API"],
    },
    {
      href: "https://henrikcheng.github.io/",
      imageSrc: Mirjaleipoo,
      imageAlt: "Website for a local bakery in Finland",
      githubLink: "https://github.com/HenrikCheng/MirjaPage",
      header: "demo_portfolio_title",
      description: "demo_mirjaleipoo_description",
      techStack: ["JS", "HTML", "CSS", "jQuery", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
      githubLink: "https://github.com/HenrikCheng/film-app",
      header: "demo_portfolio_title",
      description: "demo_filmapp_description",
      techStack: ["React", "JS", "HTML", "CSS", "Local storage", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
      githubLink: "https://github.com/HenrikCheng/tic-tac-toe",
      header: "demo_portfolio_title",
      description: "demo_tictactoe_description",
      techStack: ["Typescript", "HTML", "CSS", "Tailwind", "React"],
    },
    {
      href: "https://henrikcheng.github.io/weather-guru",
      imageSrc: "https://picsum.photos/1280/768",
      imageAlt: "Find out the weather at your location",
      githubLink: "https://github.com/HenrikCheng/weather-guru",
      header: "demo_weatherguru_title",
      techStack: ["React", "REST-API"],
      description: "demo_weatherguru_description",
    },
  ];

  return (
    <Card>
      <div id="Demo">
        <Header classes="text-4xl font-semibold mb-4">
          <FormattedMessage id="demo_title" />
        </Header>
        <Text classes="text-gray-700 text-base text-left mb-6 mx-2 text-center">
          <FormattedMessage id="demo_subtitle" />
        </Text>

        <Slider height={350} width={400} slides={projects} componentId="Demo" />
        <div className="mt-6 mb-3">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl "
          >
            <FormattedMessage id="cv_more_info" />
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Demo;
