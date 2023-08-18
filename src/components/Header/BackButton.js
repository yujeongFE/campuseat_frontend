import React from "react";
import { ReactComponent as BackButtonSvg } from "../../assets/backbutton.svg";

const BackButton = () => {
  return (
    <div>
      <BackButtonSvg
        style={{
          filter: "drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.1))",
        }}
      />
    </div>
  );
};

export default BackButton;
