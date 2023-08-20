import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, modalImages }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="image-grid">
          {modalImages.map((imageUrl, index) => (
            <div className="modal-image-container" key={index}>
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={300} // 원하는 너비 값으로 변경
                height={350}
              />
            </div>
          ))}
        </div>
        <button className="modal-close-button" onClick={closeModal}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default Modal;
