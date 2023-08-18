import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const background = {
  background: 'linear-gradient(180deg, #FF6D1A 0%, #FAB55F 70%, #F4DE9A 100%)',
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



const Lending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/review/create');
    }, 2000); 
  }, [navigate]);
  return (
    <div style={background}>
      <div style={logoWrapper}>
        <img width={180} alt="뭐가 궁금해" src="/images/landing-logo.png" />
        <img width={300} alt="뭐가 궁금해" src="/images/landing-title.png" />
      </div>
    </div>
    );
};

export default Lending;
