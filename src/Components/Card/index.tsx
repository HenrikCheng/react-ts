import React, { ReactNode } from "react"; // we need this to make JSX compile

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="max-w-lg rounded overflow-hidden shadow-lg">
    {children}
  </div>
);

export default Card;
