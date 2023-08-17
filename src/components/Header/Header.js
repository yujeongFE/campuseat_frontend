import React from "react";
import BackButton from "./BackButton";
import SidebarButton from "./SidebarButton";
import "./Header.css";

const Header = ({ backgroundColor }) => {
  const headerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="header-container" style={headerStyle}>
      <BackButton /> <SidebarButton />
    </div>
  );
};

export default Header;
