import React from "react";

const Footer: React.FC<{}> = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full fixed bottom-0 -z-10 bg-slate-200 pt-20">
      &copy; {currentYear} Henrik Cheng. All rights reserved.
    </div>
  );
};

export default Footer;
