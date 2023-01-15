import React from "react"; // we need this to make JSX compile

type AboutProps = {
  title: string;
  paragraph: string;
};

export const About = ({ title, paragraph }: AboutProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);
