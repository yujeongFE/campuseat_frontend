import React from "react";
import "./Modal.css";

function Modal(props) {
  const { color } = props;

  function closeModal() {
    props.closeModal();
  }

  const modalStyle = {
    backgroundColor: color || "rgb(255, 255, 255)", // 기본값을 흰색으로 설정
  };

  return (
    <div className="ModalBack">
      <div className="ModalContent" style={modalStyle}>
        <button className="Closebtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
