import { FormattedMessage } from "react-intl";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleModal } from "../Modal/modalSlice";
import { selectBgColor, selectTextColor } from "../Hero/colorSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LangSelect from "../../components/LangSelect";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const menuColor = useAppSelector(selectBgColor);
  const textColor = useAppSelector(selectTextColor);

  const linkStyles = `${textColor} block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-xl xl:text-2xl font-semibold hover:drop-shadow-lg hover:underline underline-offset-2 whitespace-nowrap`;

  return (
    <nav
      className={`${
        window.scrollY + 100 < window.innerHeight
          ? "bg-transparent"
          : "bg-slate-800"
      } ${menuColor} sticky top-0 text-gray-900 z-30 translate-y-0 `}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/henrik-cheng-a8a3b9180/"
            className="mr-3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
            />
          </a>
          <a href="mailto:henrikcheng@live.se" className="mr-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
            />
          </a>
          <a href="tel:+46725133704" className="mr-8">
            <FontAwesomeIcon
              icon={faPhone}
              className={`${textColor} fa-xl lg:fa-2x hover:drop-shadow-lg`}
            />
          </a>
          <span
            className={`text-2xl xl:text-3xl font-semibold hidden lg:block ${textColor}`}
          >
            Henrik Cheng
          </span>
        </div>
        <div className="flex">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <a href="#Home" className={linkStyles}>
                  <FormattedMessage id="home_title" />
                </a>
              </li>
              <li>
                <a href="#AboutMe" className={linkStyles}>
                  <FormattedMessage id="about_title" />
                </a>
              </li>
              <li>
                <a href="#CV" className={linkStyles}>
                  CV
                </a>
              </li>
              <li>
                <a href="#Contact" className={linkStyles}>
                  <FormattedMessage id="contact_title" />
                </a>
              </li>
              <li>
                <a href="#Demo" className={linkStyles}>
                  <FormattedMessage id="demo_title" />
                </a>
              </li>
            </ul>
          </div>
          <LangSelect textColor={textColor} />
          <button
            onClick={() => dispatch(toggleModal())}
            data-collapse-toggle="navbar-default"
            type="button"
            className="md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon
              icon={faBars}
              className={`${textColor} fa-xl lg:fa-2x ml-2`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
