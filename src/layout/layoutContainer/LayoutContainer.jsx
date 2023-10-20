import React from "react";
import NavBar from "../navBar/NavBar";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="bg-bg-body h-body-height p-7">{children}</div>
    </div>
  );
};

export default LayoutContainer;
