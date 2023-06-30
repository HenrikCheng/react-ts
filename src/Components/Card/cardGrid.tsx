import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="flex flex-col w-full items-center">{children}</div>
);

export default CardGrid;
