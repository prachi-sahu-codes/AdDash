import React from "react";
import NavBar from "../navBar/NavBar";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-300">{children}</div>
    </div>
  );
};

export default LayoutContainer;
