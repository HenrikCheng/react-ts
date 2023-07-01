import React, { ReactNode } from "react";

const Container = () => {
  const itemArray = Array.from({ length: 10 });

  return (
    <div className="App" style={{ width: "100%", overflowX: "scroll" }}>
      <div style={{ display: "flex" }}>
        {itemArray.map((_, index) => (
          <Item key={index} number={index} />
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
    <div
      style={{ height: "300px", width: "514px", margin: "16px" }}
      className="bg-slate-500"
    >
      <div style={{ height: "100%", width: "514px" }}>Hello {number}</div>
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
