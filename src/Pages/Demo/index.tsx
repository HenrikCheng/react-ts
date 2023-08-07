import React from "react";

import Card from "../../components/Card";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";
import Tretton37 from "../../images/tretton37.png";
import Mirjaleipoo from "../../images/mirjaleipoo.png";
import People from "../../images/1337-people.png";

type ItemProps = {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  githubLink?: string;
};

const Project = ({ href, imageSrc, imageAlt, githubLink }: ItemProps) => {
  return (
    <div className="h-96 w-96">
      <div className="w-96">
        <img
          src={imageSrc}
          alt={imageAlt || imageSrc}
          className="h-80 w-96 hover:scale-105 transition duration-300 ease-in-out object-cover mb-2"
        />
        {githubLink && (
          <div>
            <span>Source code available: </span>
            <a
              className="font-bold"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Demo: React.FC<{}> = (props) => {
  const projects = [
    {
      href: "https://www.tretton37.com/",
      imageSrc: Tretton37,
      imageAlt: "Tretton37 website",
    },
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
      githubLink: "https://github.com/HenrikCheng/film-app",
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
      githubLink: "https://github.com/HenrikCheng/tic-tac-toe",
    },
    {
      href: "https://henrikcheng.github.io/",
      imageSrc: Mirjaleipoo,
      imageAlt: "Website for a local bakery in Finland",
      githubLink: "https://github.com/HenrikCheng/MirjaPage",
    },
    {
      href: "https://henrikcheng.github.io/1337-people",
      imageSrc: People,
      imageAlt: "Company employees of Tretton37",
      githubLink: "https://github.com/HenrikCheng/1337-people",
    },
  ];

  return (
    <Card>
      <div className="w-full overflow-x-scroll" id="Demo">
        <div className="flex space-x-6">
          {projects.map((project, index) => (
            <Project
              key={index}
              href={project.href}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Demo;
