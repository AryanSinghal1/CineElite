import React from "react";
import { Popup } from "./Popup";

const Modal = ({ visible, onClose,pItem}) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
    <div className="bg-white items-center overflow-x-scroll flex justify-center py-5"><Popup packageItem={pItem} /></div>
    </div>
  );
};

export default Modal;
