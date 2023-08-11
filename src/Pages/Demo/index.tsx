import { useState } from "react";
import { FormattedMessage } from "react-intl";

import Card from "../../components/Card";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";
import Tretton37 from "../../images/tretton37.png";
import PortfolioPic from "../../images/portfolio.png";
import Mirjaleipoo from "../../images/mirjaleipoo.png";
import People from "../../images/1337-people.png";
import Header from "../../components/Header";
import Text from "../../components/Text";
import "./styles.css";

type ItemProps = {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  githubLink?: string;
  label?: string;
  description?: string;
  techStack?: Array<String>;
  isDragging: any;
  header?: string;
  index: number;
};

const Project = ({
  href,
  imageSrc,
  imageAlt,
  githubLink,
  header,
  description,
  techStack,
  isDragging,
  index,
}: ItemProps) => {
  return (
    <div>
      {(githubLink || href) && (
        <div className="w-full flex justify-around mb-1">
          {href && (
            <a
              className="font-bold hover:underline underline-offset-2"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="demo_open" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="font-bold hover:underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="demo_sourcecode" />
            </a>
          )}
        </div>
      )}
      <div className={`w-96 relative ${isDragging ? "no-pointer-events" : ""}`}>
        {(header || description) && (
          <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-slate-200 opacity-90 text-transparent hover:text-black flex items-center justify-center p-4 text-lg font-medium flex-col">
            {header && (
              <h5 className="font-bold">
                <FormattedMessage id={`demo_${index + 1}_title`} />
              </h5>
            )}
            {description && (
              <p>
                <FormattedMessage id={`demo_${index + 1}_description`} />
              </p>
            )}
          </div>
        )}
        <img
          src={imageSrc}
          alt={imageAlt || imageSrc}
          className="h-80 w-96 hover:translate-y-1 transition duration-300 ease-in-out object-cover mb-2 hover:cursor-pointer"
        />
      </div>

      {techStack && (
        <div className="font-semibold">{techStack.join(" | ")}</div>
      )}
    </div>
  );
};

const Demo: React.FC<{}> = (props) => {
  const projects = [
    {
      href: "https://henrikcheng.github.io/react-ts",
      imageSrc: PortfolioPic,
      imageAlt: "Henriks portfolio page",
      header: "demo_1_title",
      description: "demo_1_description",
      techStack: ["Typescript", "React", "React-Intl", "OpenLayers maps"],
    },
    {
      href: "https://www.tretton37.com/",
      imageSrc: Tretton37,
      imageAlt: "Tretton37 website",
      description: "demo_2_description",
      techStack: ["Webflow", "HTML", "JS", "CSS", "Kanban", "Figma"],
    },
    {
      href: "https://henrikcheng.github.io/1337-people",
      imageSrc: People,
      imageAlt: "Company employees of Tretton37",
      githubLink: "https://github.com/HenrikCheng/1337-people",
      description: "demo_3_description",
      techStack: ["React", "Query params", "Debounce", "Tailwind", "REST API"],
    },
    {
      href: "https://henrikcheng.github.io/",
      imageSrc: Mirjaleipoo,
      imageAlt: "Website for a local bakery in Finland",
      githubLink: "https://github.com/HenrikCheng/MirjaPage",
      label: "Mirja Leipoo bageri",
      description: "demo_4_description",
      techStack: ["JS", "HTML", "CSS", "jQuery", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
      githubLink: "https://github.com/HenrikCheng/film-app",
      description: "demo_5_description",
      techStack: ["React", "JS", "HTML", "CSS", "Local storage", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
      githubLink: "https://github.com/HenrikCheng/tic-tac-toe",
      description: "demo_6_description",
      techStack: ["Typescript", "HTML", "CSS", "Tailwind", "React"],
    },
    {
      href: "https://henrikcheng.github.io/weather-guru",
      imageSrc: "https://picsum.photos/1280/768",
      imageAlt: "Find out the weather at your location",
      githubLink: "https://github.com/HenrikCheng/weather-guru",
      header: "demo_7_title",
      techStack: ["React", "REST-API"],
      description: "demo_7_description",
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    setIsDragging(true);
    setStartX(e.clientX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - e.currentTarget.offsetLeft;
    const walk = x - startX * 1; // Adjust the multiplier for faster/slower scrolling
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Card>
      <Header classes="text-4xl font-semibold mb-4">
        <FormattedMessage id="demo_title" />
      </Header>
      <Text classes="text-gray-700 text-base text-left mb-6 mx-2 text-center">
        <FormattedMessage id="demo_subtitle" />
      </Text>
      <div
        className="w-full overflow-x-scroll relative"
        id="Demo"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex space-x-6">
          {projects.map((project, index) => (
            <Project
              header={project.header}
              key={index}
              href={project.href}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              githubLink={project.githubLink}
              label={project.label}
              description={project.description}
              techStack={project.techStack}
              isDragging={isDragging}
              index={index}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Demo;
