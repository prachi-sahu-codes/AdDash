import React from "react";
import { useSelector } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { formatTableData } from "../../utils/functions";

export const DoughnutHeader = ({ setLabelSelected }) => {
  const tableData = useSelector((state) => state?.dashboard?.graphData);
  const keys = Object.keys(tableData[0]);
  const filteredKeys = formatTableData(keys).filter((key) => key !== "Group");

  return (
    <div className="flex gap-5">
      <select
        className="text-sm font-medium text-medium-text border-2 rounded px-1 focus:outline-none focus:border-custom-blue"
        onChange={(e) => setLabelSelected(e.target.value)}
      >
        {filteredKeys.map((label) => (
          <option key={label} value={label.toLowerCase()}>
            {label}
          </option>
        ))}
      </select>
      <p className="text-light-text cursor-pointer opacity-60" title="Info">
        <HelpOutlineIcon />
      </p>
    </div>
  );
};
