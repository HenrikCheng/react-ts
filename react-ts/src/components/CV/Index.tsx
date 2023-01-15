import React from "react"; // we need this to make JSX compile

type CVProps = {
  title: string;
  paragraph: string;
};

export const CV = ({ title, paragraph }: CVProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);
