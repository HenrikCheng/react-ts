import React from "react"; // we need this to make JSX compile

interface HeaderProps {
  content: string;
  classes?: string;
}

const Header = ({ content, classes }: HeaderProps) => (
  <div>
    <p className={classes || ""}>{content}</p>
  </div>
);

export default Header;
