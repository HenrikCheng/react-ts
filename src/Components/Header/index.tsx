import React, { ReactNode } from "react";

interface HeaderProps {
  title?: string;
  subTitle?: string;
  classes?: string;
  children?: ReactNode;
}

const Header = ({ title, subTitle, classes, children }: HeaderProps) => {
  if (title && children) {
    throw new Error("Only one of 'title' or 'children' should be provided.");
  }

  return (
    <div>
      <div className={classes || "font-bold text-xl mb-2"}>
        {title || children}
      </div>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};

export default Header;
