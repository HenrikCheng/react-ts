import { useRef, MutableRefObject, useState, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../Modal/modalSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  // Hide menu when scrolling down, show menu when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPosition > currentScrollPos;

      setScrollPosition(currentScrollPos);
      setVisible(visible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const dispatch = useAppDispatch();

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  const linkStyles =
    "block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-xl font-semibold";

  return (
    <nav
      className={`sticky top-0 h-0 text-gray-900 z-40 ${
        visible ? "block" : "hidden"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/henrik-cheng-a8a3b9180/"
              className="mr-3"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x" />
            </a>
            <a href="mailto:henrikcheng@live.se" className="mr-3">
              <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
            </a>
            <a href="tel:+46725133704" className="mr-8">
              <FontAwesomeIcon icon={faPhone} className="fa-2x" />
            </a>
            <span className="text-2xl font-semibold">Henrik Cheng</span>
          </div>
          <button
            onClick={() => dispatch(toggleModal())}
            data-collapse-toggle="navbar-default"
            type="button"
            className="md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} className="fa-2x" />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <button
                  type="button"
                  onClick={executeScroll}
                  className={linkStyles}
                >
                  Hem
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={executeScroll}
                  className={linkStyles}
                >
                  Om mig
                </button>
              </li>
              <li>
                <a href="#CV" className={linkStyles}>
                  CV
                </a>
              </li>
              <li>
                <a href="#Demo" onClick={executeScroll} className={linkStyles}>
                  Demoprojekt
                </a>
              </li>
              <li>
                <a href="#Contact" className={linkStyles}>
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;