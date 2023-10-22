import React from "react";
import NavBar from "../navBar/NavBar";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="min-h-body-height h-full p-4 sm:p-7">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
