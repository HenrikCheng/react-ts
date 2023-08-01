import { ReactNode } from "react"; // we need this to make JSX compile

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => (
  <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-white">
    {children}
  </div>
);

export default Card;
