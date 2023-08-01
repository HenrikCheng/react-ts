import { ReactNode } from "react"; // we need this to make JSX compile

interface CardProps {
  children: ReactNode;
  classes?: string;
}

const Card = ({ children, classes }: CardProps) => (
  <div
    className={
      classes || `max-w-3xl rounded overflow-hidden shadow-lg bg-white`
    }
  >
    {children}
  </div>
);

export default Card;
