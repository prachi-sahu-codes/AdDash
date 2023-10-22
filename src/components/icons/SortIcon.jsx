import React from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

export const SortIcon = ({ sortTable, tableLabel }) => {
  const {  sortLabel, sortOrder } = sortTable;
  return (
    <div className="flex flex-col">
      <KeyboardArrowUp
        style={{
          color:
            sortLabel && sortOrder === "asc" && sortLabel === tableLabel
              ? "#333d47"
              : "#e3e3e3",
          width: "16px",
          height: "16px",
        }}
      />
      <KeyboardArrowDown
        style={{
          color:
            sortLabel && sortOrder === "dsc" && sortLabel === tableLabel
              ? "#333d47"
              : "#e3e3e3",
          width: "16px",
          height: "16px",
          marginTop: "-9px",
        }}
      />
    </div>
  );
};
