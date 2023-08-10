import { useState, useEffect } from "react";

import Card from "../../components/Card";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";
import Tretton37 from "../../images/tretton37.png";
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
}: ItemProps) => {
  return (
    <div>
      {(githubLink || href) && (
        <div className="w-full flex justify-around">
          {href && (
            <a
              className="font-bold"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              Öppna demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="font-bold"
              target="_blank"
              rel="noreferrer"
            >
              Källkod
            </a>
          )}
        </div>
      )}
      <div className={`w-96 relative ${isDragging ? "no-pointer-events" : ""}`}>
        {(header || description) && (
          <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-slate-200 opacity-90 text-transparent hover:text-black flex items-center justify-center p-4 text-lg font-medium flex-col">
            <h5 className="font-bold">{header}</h5>
            <p>{description}</p>
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
      imageSrc: "https://picsum.photos/1280/768",
      imageAlt: "Henriks portfolio page",
      header: "Henriks portfolio",
      description:
        "Ett digitalt CV för att presentera mig närmare som en potentiell kollega.",
      techStack: ["Typescript", "React", "React-Intl", "OpenLayers maps"],
    },
    {
      href: "https://www.tretton37.com/",
      imageSrc: Tretton37,
      imageAlt: "Tretton37 website",
      description:
        "Tretton37 är ett konsultföretag där IT-talanger arbetar. Företaget strävade efter att omdefiniera sin online-närvaro för att tydligare kommunicera sitt budskap, och det var då Henrik trädde in som en av de tre utvecklare. Med en passionerad inställning och starkt engagemang lärde han sig low-code programmering samtidigt som han skapade fram komponenter med pixel-perfekt precision.",
      techStack: ["Webflow", "HTML", "JS", "CSS", "Kanban", "Figma"],
    },
    {
      href: "https://henrikcheng.github.io/1337-people",
      imageSrc: People,
      imageAlt: "Company employees of Tretton37",
      githubLink: "https://github.com/HenrikCheng/1337-people",
      description:
        "Henrik gjorde en webapp som konsumerar ett internt API för att lära sig mer om lite mer avancerade React-tekniker. Under sista tiden har Henrik även intresserat sig för backend, något som gjort att han även skapat API:er med CRUD-funktionalitet och databas där data lagras.",
      techStack: ["React", "Query params", "Debounce", "Tailwind", "REST API"],
    },
    {
      href: "https://henrikcheng.github.io/",
      imageSrc: Mirjaleipoo,
      imageAlt: "Website for a local bakery in Finland",
      githubLink: "https://github.com/HenrikCheng/MirjaPage",
      label: "Mirja Leipoo bageri",
      description:
        "Mirja Leipoo är ett väletablerat, lokalt familjeägt företag som omfattar ett bageri, bed & breakfast samt cateringtjänster, och det har sin bas i Finland. Företaget ville etablera en online-närvaro att utöka sin kundkrets. Under sin studietid, hjälpte Henrik företaget och samtidigt kunde han applicera sina nya kunskaper.",
      techStack: ["JS", "HTML", "CSS", "jQuery", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
      githubLink: "https://github.com/HenrikCheng/film-app",
      description:
        "I början av karriären så skapade jag denna för att lära sig React, och göra ett praktiskt projekt inom något jag var intresserad av.",
      techStack: ["React", "JS", "HTML", "CSS", "Local storage", "Bootstrap"],
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
      githubLink: "https://github.com/HenrikCheng/tic-tac-toe",
      description:
        "Efter att ha jobbat några år med React och Javascript tänkte jag att jag ville lära mig mer och lära mig grunderna i typescript. Det fanns ingen möjlighet via jobbet, så jag valde att göra en luffarschack-spel i typescript för att lära mig.",
      techStack: ["Typescript", "HTML", "CSS", "Tailwind", "React"],
    },
    {
      href: "https://henrikcheng.github.io/weather-guru",
      imageSrc: "https://picsum.photos/1280/768",
      imageAlt: "Find out the weather at your location",
      githubLink: "https://github.com/HenrikCheng/weather-guru",
      header: "A no-nonsense weather-app",
      techStack: ["React", "REST-API"],
      description:
        "During my shifts as a doctor in the ER, I often found it challenging to stay updated on the weather without access to windows. Many weather apps I tried were filled with distracting commercials. This app provides a simple solution to that problem.",
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
      <Header title="Demoprojekt" classes="text-4xl font-semibold mb-4" />
      <Text
        content="Vänligen rulla eller svep åt sidan för att fortsätta läsa."
        classes="text-gray-700 text-base text-left mb-6 mx-2 text-center"
      />
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
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Demo;
