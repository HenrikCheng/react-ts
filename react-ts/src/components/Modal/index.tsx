import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { toggleModal, selectModal } from "./modalSlice";

const Modal = () => {
  const showModal = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  if (showModal) {
    return (
      <>
        <div className="fixed inset-0 z-20 shadow-xl bg-white mx-20 my-32 min-w-fit">
          Modal
          <button type="button" onClick={() => dispatch(toggleModal())}>
            _x
          </button>
        </div>
        <div className="fixed inset-0 z-10 blur h-screen w-screen"></div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Modal;
