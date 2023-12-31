import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex gap-2 justify-between items-center py-4 px-7 shadow-custom-md sticky top-0 z-10 bg-white">
      <h2 className=" font-bold uppercase text-lg sm:text-logo text-dark-text tracking-wide">
        App Logo
      </h2>
      <div className="flex gap-3 430px:gap-8 uppercase text-dark-text">
        <NavLink
          to="/"
          className="font-medium text-sm 430px:text-1.1rem hover:text-black active:text-medium-text transition-colors"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/createAd"
          className="font-medium text-sm 430px:text-1.1rem hover:text-black active:text-medium-text transition-colors"
        >
          Create Ads
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
