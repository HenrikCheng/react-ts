import React, { ReactNode } from "react";
// import Thumbnail from 'react-thumbnail';

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-6">
    {/* <Thumbnail url="https://nodejs.org/en/download/" /> */}
    {children}
  </div>
);

export default CardGrid;
