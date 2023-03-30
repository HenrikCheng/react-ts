import React from "react"; // we need this to make JSX compile

interface HeaderProps {
  title: string;
  subTitle?: string;
  classes?: string;
}

const Header = ({ title, subTitle, classes }: HeaderProps) => (
  <div>
    <h2 className={classes || "text-xl font-semibold mb-4"}>{title}</h2>
    {subTitle && <p>{subTitle}</p>}
  </div>
);

export default Header;
