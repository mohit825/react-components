import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-slate-200 z-50  flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
      data-testid="modal"
    >
      <div className=" w-[300px] h-[300px] bg-white relative">
        <i className="cursor-pointer absolute right-0" onClick={onClose}>
          ❌
        </i>
        <main>{children}</main>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
