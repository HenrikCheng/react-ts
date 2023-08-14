import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC<{}> = (props) => {
  const currentYear = new Date().getFullYear();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledPixels = window.scrollY;
      const remainingPixels = documentHeight - windowHeight - scrolledPixels;

      if (remainingPixels > 300) setShowFooter(false);
      if (remainingPixels <= 300) setShowFooter(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (showFooter) {
    return (
      <footer className="w-full fixed bottom-0 bg-slate-200 pt-20 pb-4 text-lg font-semibold">
        <div className="space-x-4 flex justify-center w-full">
          <a
            href="https://www.linkedin.com/in/henrik-cheng/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            LinkedIn
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-1 fa-xs"
            />
          </a>
          <div>|</div>
          <a
            href="https://www.tretton37.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            tretton37
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-1 fa-xs"
            />
          </a>
          <div>|</div>
          <a
            href="https://www.tretton37.com/specialists/henrik-cheng"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-2"
          >
            Profile
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="ml-1 fa-xs"
            />
          </a>
        </div>
        <div>&copy; {currentYear} Henrik Cheng. All rights reserved.</div>
      </footer>
    );
  }

  return <></>;
};

export default Footer;
