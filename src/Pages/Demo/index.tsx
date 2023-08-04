import React from "react";

import Card from "../../components/Card";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";

type ItemProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const Project = ({ href, imageSrc, imageAlt }: ItemProps) => {
  return (
    <div className="h-96 w-96">
      <div className="w-96">
        <a href={href} target="_blank" rel="noreferrer">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-96 max-w-96 hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
};

const Demo: React.FC<{}> = (props) => {
  const projects = [
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
    },
    {
      href: "https://henrikcheng.github.io/film-app/",
      imageSrc: FilmPic,
      imageAlt: "click to go to video app",
    },
    {
      href: "https://henrikcheng.github.io/tic-tac-toe/",
      imageSrc: TicTacToePic,
      imageAlt: "click to go to tictactoe game",
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
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Demo;
