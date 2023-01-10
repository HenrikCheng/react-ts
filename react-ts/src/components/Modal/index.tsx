import React from "react";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Function;
}

const Modal = ({ menuOpen, setMenuOpen }: Props): JSX.Element => {
  if (!menuOpen) {
    return (
      <>
        <div className="fixed inset-0 z-20 shadow-xl bg-white mx-20 my-32 min-w-fit">
          Modal
          <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
            _x
          </button>
        </div>
        <div className="fixed inset-0 z-10"></div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Modal;
