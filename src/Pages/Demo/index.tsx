import React from "react";

import Card from "../../components/Card";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";

const ProjectSwiper = () => {
  const itemArray = Array.from({ length: 4 });

  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex space-x-6">
        {itemArray.map((_, index) => (
          <Project key={index} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

type ItemProps = {
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  number?: number;
};

const Project = ({ number, href, imageSrc, imageAlt, title }: ItemProps) => {
  return (
    <div className="h-96 w-96">
      <div className="w-96">
        <a
          href="https://henrikcheng.github.io/tic-tac-toe/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={TicTacToePic}
            alt="click to go to tictactoe game"
            className="max-h-96 max-w-96 hover:scale-105 transition duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
};

const Demo: React.FC<{}> = (props) => {
  return (
    <Card>
      <div id="Demo">
        <ProjectSwiper />
        <div className="bg-white flex flex-col space-y-4 items-center">
          <a
            href="https://henrikcheng.github.io/film-app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={FilmPic}
              className="max-h-96 max-w-96 hover:scale-105 transition duration-300 ease-in-out"
              alt="click to go to video app"
            />
          </a>
          <a
            href="https://henrikcheng.github.io/tic-tac-toe/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={TicTacToePic}
              className="max-h-96 max-w-96 hover:scale-105 transition duration-300 ease-in-out"
              alt="click to go to tictactoe game"
            />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Demo;
