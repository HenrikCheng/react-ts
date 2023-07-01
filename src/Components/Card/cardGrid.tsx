import React, { ReactNode } from "react";

const Container = () => {
  const itemArray = Array.from({ length: 10 });

  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex space-x-6">
        {itemArray.map((_, index) => (
          <Item key={index} number={index + 1} />
        ))}
      </div>
    </div>
  );
};

type ItemProps = {
  number: number;
};

const Item = ({ number }: ItemProps) => {
  return (
    <div className="bg-slate-500 h-96">
      <div className="h-full w-96">Hello {number}</div>
    </div>
  );
};

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="flex flex-col w-full items-center">
    <Container />
    {children}
  </div>
);

export default CardGrid;
