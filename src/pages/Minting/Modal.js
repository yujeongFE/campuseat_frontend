import React from 'react';
import styled from 'styled-components';


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-weight: bold;

  p {
    margin: 0;
  }

  button {
    margin-top: 10px;
    margin-left: 30px;
    font-weight: 500;
    color: #EB4F27;
    border-radius: 10px;
    border: none;
    height: 25px;
    width: 85px;
  }

`;

function Modal({ message, onCancel }) {
    const GotoKlip = () => {
      const KlipUrl = encodeURIComponent('https://klipwallet.com/');
      const KlipDeepLink = `kakaotalk://klipwallet/open?url=${KlipUrl}`;
      window.location.href = KlipDeepLink;
    };
  
    return (
      <ModalOverlay>
        <ModalContent>
          <p style={{ fontWeight: "500" }}>{message}</p>
          <button onClick={GotoKlip}>민팅하기</button>
          <button onClick={onCancel}>다시선택</button>
        </ModalContent>
      </ModalOverlay>
    );
  }
  
  export default Modal;