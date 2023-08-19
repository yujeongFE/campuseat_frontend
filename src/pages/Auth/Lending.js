import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Lending.css";
import logoImage from "../../assets/image/Login/hamburger.svg"
import { keyframes } from "styled-components";

const background = {
  background: 'linear-gradient(-50deg, #FF852D, #FFE380)',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const logoWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '300px',
  width: '300px',
  justifyContent: 'space-between',
}


const logoBounce = {
  animation: "bounce 0.4s infinite",
}; //애니메이션


const Lending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, [navigate]);
  return (
    <div style={background}>
      <div style={logoWrapper}>
        <img width={180} alt="뭐가 궁금해" src={logoImage} style={logoBounce}/>
      </div>
    </div>
    );
};

export default Lending;
