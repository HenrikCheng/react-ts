import React, { useRef, MutableRefObject } from "react";
import { useAppDispatch } from "../../app/hooks";
import { toggleModal } from "../Modal/modalSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const heroBottomAnchor = useRef() as MutableRefObject<HTMLDivElement>;

  const executeScroll = () => {
    heroBottomAnchor.current.scrollIntoView();
  };

  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/henrik-cheng-a8a3b9180/"
              className="text-gray-500 hover:text-gray-100  mr-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
            </a>
            <a
              href="mailto:henrikcheng@live.se"
              className="text-gray-500 hover:text-gray-100 mr-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
            </a>
            <a
              href="tel:+46725133704"
              className="text-gray-500 hover:text-gray-100 mr-8"
            >
              <FontAwesomeIcon icon={faPhone} className="text-lg" />
            </a>
            <span className="text-xl font-semibold text-gray-100">
              Henrik Cheng
            </span>
          </div>
          <button
            onClick={() => dispatch(toggleModal())}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#Home"
                  className="block py-2 pl-3 pr-4 rounded text-gray-100 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Hem
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={executeScroll}
                  className="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Om mig
                </button>
              </li>
              <li>
                <a
                  href="#CV"
                  className="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="#Demo"
                  onClick={executeScroll}
                  className="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Demoprojekt
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="block py-2 pl-3 pr-4 rounded text-gray-300 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
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
