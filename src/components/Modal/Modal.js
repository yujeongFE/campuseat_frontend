import React from 'react';
import styled from 'styled-components';

function Modal(props) {

  function closeModal(){
    props.closeModal();
  }

  return (
    <ModalBack>
      <ModalContent>
      <Button onClick={closeModal}>
          ✖
        </Button>
        {props.children}
      </ModalContent>
    </ModalBack>
  );

}

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
`;

/* modal창 */
const ModalContent = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const Button = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  color: rgba(0, 0, 0, 0.7);
  background-color: transparent;
  font-size: 20px;
`;



export default Modal;
