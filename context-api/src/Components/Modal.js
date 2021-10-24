import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
Modal.setAppElement("#root");
import { useMainContext } from "./Context";
// custom hook used
const ModalX = () => {
const modal = useMainContext();
    const{isModalOpen, modalClose, modalOpen} = modal
    console.log(modalOpen)
  return (
    <div className="modal-container">
      <button className="modal-btn" onClick={()=>modalOpen()}> Show Modal</button>
      <Modal isOpen={isModalOpen}>
        <div>
          <h1> CLick the button to close me</h1>
          {/* button responsible to close */}
          <button onClick={()=>modalClose()}>
            <FaTimes />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalX;
