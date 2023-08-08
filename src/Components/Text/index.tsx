import React, { ReactNode } from "react"; // we need this to make JSX compile

interface HeaderProps {
  content?: string;
  classes?: string;
  children?: ReactNode;
}

const Header = ({ content, classes, children }: HeaderProps) => (
  <div>
    <p className={classes || "text-gray-700 text-base text-left mb-6 mx-2"}>
      {content || children}
    </p>
  </div>
);

export default Header;
