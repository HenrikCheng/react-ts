import React from "react"; // we need this to make JSX compile

interface HeaderProps {
  content: string;
  classes?: string;
}

const Header = ({ content, classes }: HeaderProps) => (
  <div>
    <p className={classes || "text-gray-700 text-base text-left mb-6 mx-2"}>{content}</p>
  </div>
);

export default Header;
