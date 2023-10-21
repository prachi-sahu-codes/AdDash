import React from "react";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

export const SortIcon = (props) => {
  const { sortTable, tableLabel } = props;
  const { isSort, sortLabel, sortOrder } = sortTable;
  return (
    <div className="flex flex-col">
      <KeyboardArrowUp
        style={{
          color:
            isSort && sortOrder === "asc" && sortLabel === tableLabel
              ? "#282828"
              : "#ddd",
          width: "16px",
          height: "16px",
         
        }}
      />
      <KeyboardArrowDown
        style={{
          color:
            isSort && sortOrder === "dsc" && sortLabel === tableLabel
              ? "#282828"
              : "#ddd",
          width: "16px",
          height: "16px",
          marginTop:"-9px"
        }}
      />
    </div>
  );
};
