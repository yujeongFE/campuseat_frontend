import React from "react";
import { ReactComponent as BackButtonSvg } from "../../assets/backbutton.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div onClick={handleGoBack} style={{ cursor: "pointer" }}>
      <BackButtonSvg
        style={{
          filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))",
        }}
      />
    </div>
  );
};

export default BackButton;
