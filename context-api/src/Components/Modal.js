import React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
Modal.setAppElement("#root");
const ModalX = () => {
  return (
    <div className="modal-container">
      <Modal isOpen={false}>
        <div>
          <h1> CLick the button to close me</h1>
          {/* button responsible to close */}
          <button>
            <FaTimes />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalX;
