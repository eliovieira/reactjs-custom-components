import ReactDOM from "react-dom";
import { useEffect } from "react";

const Modal = ({ children, onClose, actionBar }) => {
  useEffect(() => {
    console.log(document.body.classList);
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80 "
        onClick={onClose}
      ></div>
      <div className="fixed top-1/2 left-1/2 w-96 bg-white rounded-3xl shadow p-10 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-between gap-8 h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
