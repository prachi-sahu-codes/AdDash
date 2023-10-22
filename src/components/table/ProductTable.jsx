import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { getTotal, formatTableData } from "../../utils/functions";
import { SortIcon } from "../icons/SortIcon";

export const ProductTable = () => {
  const productData = useSelector((state) => state?.dashboard?.tableData);
  const [sortTable, setSortTable] = useState({
    sortLabel: "",
    isAsc: false,
    sortOrder: "",
  });

  const tableData = sortTable?.sortOrder
    ? [...productData]?.sort((a, b) => {
        const label = sortTable?.sortLabel.toLowerCase();
        if (sortTable?.sortOrder !== "asc") {
          return b[label] > a[label] ? 1 : -1;
        } else {
          return a[label] > b[label] ? 1 : -1;
        }
      })
    : productData;

  const keys = Object.keys(tableData[0]);
  const filteredKeys = formatTableData(keys);

  return (
    <TableContainer component={Paper} sx={{ width: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {filteredKeys.map((item, index) => (
              <TableCell key={item + index}>
                <div
                  className={`flex items-center ${
                    item === "Campaigns" ? "justify-start" : "justify-end"
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
                  {row?.campaigns.toLocaleString()}
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
            <TableCell className="removeBorder">
              <p className="text-medium-text">Total</p>
            </TableCell>
            <TableCell align="right" className="removeBorder">
              <p className="text-medium-text">
                {getTotal(tableData, "clicks").toLocaleString()}
              </p>
            </TableCell>
            <TableCell className="removeBorder" align="right">
              <p className="text-medium-text">
                USD {getTotal(tableData, "cost").toLocaleString()}
              </p>
            </TableCell>
            <TableCell className="removeBorder" align="right">
              <p className="text-medium-text">
                {getTotal(tableData, "conversions").toLocaleString()}
              </p>
            </TableCell>
            <TableCell className="removeBorder" align="right">
              <p className="text-medium-text">
                USD {getTotal(tableData, "revenue").toLocaleString()}
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
