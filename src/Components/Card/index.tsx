import { ReactNode } from "react"; // we need this to make JSX compile

interface CardProps {
  children: ReactNode;
  classes?: string;
  id?: string;
}

const Card = ({ children, classes, id }: CardProps) => (
  <div
    id={id}
    className={
      classes ||
      "flex flex-col xl:flex-row container xl:justify-center relative bg-white shadow rounded-xl overflow-hidden z-10"
    }
  >
    {children}
  </div>
);

export default Card;
