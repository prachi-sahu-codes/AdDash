import React from "react";
import NavBar from "../navBar/NavBar";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="bg-bg-body h-body-height">{children}</div>
    </div>
  );
};

export default LayoutContainer;
