import React from 'react';
import "./modal.css";

function Modal(props) {

  function closeModal(){
    props.closeModal();
  }

  return (
    <div className='ModalBack'>
      <div className="ModalContent">
      <button className='Closebtn' onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );

}


export default Modal;
