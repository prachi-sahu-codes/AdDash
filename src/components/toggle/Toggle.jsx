import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";

export const Toggle = ({ toggle, setToggle }) => {
  return (
    <div className="absolute bottom-5 right-5 flex bg-gray-200 rounded-full">
      <div
        className={`p-0.35rem rounded-full transition-colors ease-in-out ${
          toggle ? "text-white bg-custom-blue" : "text-dark-text"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <DonutLargeIcon />
      </div>
      <div
        className={`p-0.35rem rounded-full transition-colors ease-in-out ${
          !toggle ? "text-white bg-custom-blue" : "text-dark-text"
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <TableChartOutlinedIcon />
      </div>
    </div>
  );
};
