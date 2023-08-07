import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleModal, selectModal } from "./modalSlice";

const Modal = () => {
  const showModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const linkStyles =
    "block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-xl font-semibold hover:drop-shadow-lg hover:underline underline-offset-2";

  // State to keep track of the current window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event handler to update the window width state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for the 'resize' event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close the modal when it is open and the window width is greater than or equal to 768px
    if (showModal && windowWidth >= 768) {
      dispatch(toggleModal());
    }
  }, [showModal, windowWidth]);

  if (showModal) {
    return (
      <div className="relative">
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 text-white z-50 flex flex-col px-4 pt-5">
          <button
            className="self-end"
            type="button"
            onClick={() => dispatch(toggleModal())}
          >
            <FontAwesomeIcon icon={faX} className="fa-xl" />
          </button>
          <div className="">
            <h4 className="text-3xl font-thin tracking-widest">HENRIK CHENG</h4>
            <h5 className="text-2xl font-thin tracking-widest">
              FRONTEND DEVELOPER
            </h5>
            <ul className="flex flex-col items-center p-4 mt-4 border-double border-4 border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                  className={linkStyles}
                >
                  Hem
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                >
                  <a href="#AboutMe" className={linkStyles}>
                    Om mig
                  </a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                >
                  <a href="#Competences" className={linkStyles}>
                    Kompetenser
                  </a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                >
                  <a href="#CV" className={linkStyles}>
                    CV
                  </a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                >
                  <a href="#Contact" className={linkStyles}>
                    Kontakt
                  </a>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                >
                  <a href="#Demo" className={linkStyles}>
                    Demoprojekt
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
