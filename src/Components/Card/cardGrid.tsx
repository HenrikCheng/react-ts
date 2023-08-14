import { ReactNode, Children } from "react";

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="flex flex-col w-full items-center z-10">
    {Children.map(children, (child, index) => (
      <div className="z-10 w-full">
        {index > 0 && <div className="h-8 bg-slate-200" />}
        {child}
      </div>
    ))}
  </div>
);

export default CardGrid;
