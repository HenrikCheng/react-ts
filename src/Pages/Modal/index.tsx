import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleModal, selectModal } from "./modalSlice";

const Modal = () => {
  const showModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const linkStyles =
    "block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-xl font-semibold hover:drop-shadow-lg hover:underline underline-offset-2";

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
            <ul className="flex flex-col items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, left: 0 })}
                  className={linkStyles}
                >
                  Hem
                </button>
              </li>
              <li>
                <a href="#AboutMe" className={linkStyles}>
                  Om mig
                </a>
              </li>
              <li>
                <a href="#CV" className={linkStyles}>
                  CV
                </a>
              </li>
              <li>
                <a href="#Contact" className={linkStyles}>
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#Demo" className={linkStyles}>
                  Demoprojekt
                </a>
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
