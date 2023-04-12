import React, { ReactNode } from "react"; // we need this to make JSX compile

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="flex flex-col items-center space-y-4 mt-10 bg-white shadow-lg sm:m-6 py-10 md:px-10 px-4 max-w-2xl">
    {children}
  </div>
);

export default Card;
