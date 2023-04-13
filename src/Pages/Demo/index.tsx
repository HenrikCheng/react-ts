import React from "react";
import FilmPic from "../../images/FilmApp.png";
import TicTacToePic from "../../images/tictactoe.png";

const Demo: React.FC<{}> = (props) => {
  return (
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
  );
};

export default Demo;
