import { ReactNode } from "react";
import AboutImage from "../../images/AboutImage.jpeg";

const ProjectSwiper = () => {
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
    <div className="h-96">
      <div className="w-96 bg-blue-500">Hello {number}</div>
      <img src={AboutImage} alt="placeholder" className="h-full w-96" />
    </div>
  );
};

interface CardContainerProps {
  children: ReactNode;
}

const CardGrid = ({ children }: CardContainerProps) => (
  <div className="flex flex-col w-full items-center">
    {children}
    <ProjectSwiper />
  </div>
);

export default CardGrid;
