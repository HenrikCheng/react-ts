import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleModal, selectModal } from "./modalSlice";

const Modal = () => {
  const showModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  if (showModal) {
    return (
      <div className="relative">
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-red-500 z-50 flex flex-col px-4 pt-5">
          <button
            className="self-end"
            type="button"
            onClick={() => dispatch(toggleModal())}
          >
            <FontAwesomeIcon icon={faX} className="fa-xl" />
          </button>
          <div>Modal</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
