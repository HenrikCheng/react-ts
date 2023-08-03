import React from "react"; // we need this to make JSX compile

interface HeaderProps {
  title: string;
  subTitle?: string;
  classes?: string;
}

const Header = ({ title, subTitle, classes }: HeaderProps) => (
  <div>
    <div className={classes || "font-bold text-xl mb-4"}>{title}</div>
    {subTitle && <p>{subTitle}</p>}
  </div>
);

export default Header;
