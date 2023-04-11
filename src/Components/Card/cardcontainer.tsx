import React, { ReactNode } from "react"; // we need this to make JSX compile

interface CardContainerProps {
  children: ReactNode;
}

const CardContainer = ({ children }: CardContainerProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-4">{children}</div>
);

export default CardContainer;
