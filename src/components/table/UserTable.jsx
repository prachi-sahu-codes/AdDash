import { useState } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTotal, formatTableData } from "../../utils/functions";
import { SortIcon } from "../icons/SortIcon";

export const UserTable = () => {
  const graphData = useSelector((state) => state?.dashboard?.graphData);
  const [sortTable, setSortTable] = useState({
    sortLabel: "",
    isAsc: false,
    sortOrder: "",
  });

  const tableData = sortTable?.sortOrder
    ? [...graphData]?.sort((a, b) => {
        const label = sortTable?.sortLabel.toLowerCase();
        if (sortTable?.sortOrder !== "asc") {
          return b[label] > a[label] ? 1 : -1;
        } else {
          return a[label] > b[label] ? 1 : -1;
        }
      })
    : graphData;

  const keys = Object.keys(tableData[0]);
  const filteredKeys = formatTableData(keys);

  return (
    <TableContainer component={Paper} sx={{ width: "100%" }} className="removeShadow">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {filteredKeys.map((item, index) => (
              <TableCell key={item + index}>
                <div
                  className={`flex items-center ${
                    item === "Group" ? "justify-start" : "justify-end"
                  } gap-1 cursor-pointer text-dark-text font-semibold`}
                  onClick={() => {
                    setSortTable({
                      sortLabel: item,
                      isAsc: !sortTable.isAsc,
                      sortOrder: sortTable.isAsc ? "asc" : "dsc",
                    });
                  }}
                >
                  {item}
                  <SortIcon sortTable={sortTable} tableLabel={item} />
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow
              key={row?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p className="text-medium-text">
                  {row?.group.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text">
                  {row?.clicks.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text">
                  USD {row?.cost.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text">
                  {row?.conversions.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className=" text-medium-text">
                  USD {row?.revenue.toLocaleString()}
                </p>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-bg-body">
            <TableCell>
              <p className="text-medium-text">Total</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text">
                {getTotal(tableData, "clicks")?.toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text">
                USD {getTotal(tableData, "cost")?.toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text">
                {getTotal(tableData, "conversions")?.toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text">
                USD {getTotal(tableData, "revenue")?.toLocaleString()}
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
