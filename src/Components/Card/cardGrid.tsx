import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="flex flex-col w-full items-center space-y-4">{children}</div>
);

export default CardGrid;
