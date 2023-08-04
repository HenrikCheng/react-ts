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
      `flex flex-col container bg-white shadow rounded-xl lg:px-4 2xl:px-24 py-4`
    }
  >
    {children}
  </div>
);

export default Card;
