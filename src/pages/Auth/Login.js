import React, { useState } from "react";
import styled from "styled-components";
import QRCode from "qrcode.react";
import * as KlipAPI from "./Klip.js";
import hamburger from "../../assets/image/Login/hamburger.svg";
import klipIcon from "../../assets/image/Login/klipIcon.svg";

const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x00000000000000000000000000000";


function Login(props) {
    const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
    const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);
  
    const redirectToKlip = () => {
      KlipAPI.getAddress(setQrvalue_auth, async (address) => {
        setMyAddress(address);
        window.location.href = `../main`;
      });
    };
  
    return (
      <LoginPage>
        <Circle></Circle>
        <Hamburger src={hamburger} alt="hamburger" />
        <CamEat>&nbsp;CAMPUS<br />EAT</CamEat>
        <Button onClick={redirectToKlip}>
          <img src={klipIcon} className="klipIcon" />
          클립으로 로그인.
        </Button>
        <QRContainer>
          {qrvalue_auth !== DEFAULT_QR_CODE && <QRCode value={qrvalue_auth} />}
        </QRContainer>
      </LoginPage>
    );
  }


const LoginPage = styled.div`
  background: linear-gradient(-50deg, #FF852D, #FFE380);
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.div`
  background-color: rgba(255, 255, 255, 0.200);
  width: 180px;
  height: 180px;
  border-radius: 100px;
  margin-top: 250px;
  box-shadow: 0px 4px 4px inset rgba(0, 0, 0, 0.25);
`;

const Hamburger = styled.img`
  width: 115px;
  height: 104px;
  position: absolute;
  margin-top: 290px;
`;

const CamEat = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  color: white;
  letter-spacing: 18px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.250);
  margin-top: 10px;
`;

const Button = styled.button`
  width: 328px;
  height: 45px;
  background-color: #186BED;
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .klipIcon {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;

const QRContainer = styled.div`
  padding: 10px;
  margin: 30px;
`;
  
export default Login;


