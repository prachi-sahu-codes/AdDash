import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useSelector } from "react-redux";
import { getTotal } from "../../utils/functions";

export const BasicTable = () => {
  const tableData = useSelector((state) => state?.dashboard?.tableData);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="text-dark-text font-semibold text-lg">
                Ad Insights
              </p>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <p
                className="text-light-text cursor-pointer opacity-60"
                title="Info"
              >
                <HelpOutlineIcon />
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <p className="text-dark-text font-semibold text-base">
                Campaigns
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-dark-text font-semibold text-base">Clicks</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-dark-text font-semibold text-base">Cost</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-dark-text font-semibold text-base">
                Conversions
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-dark-text font-semibold text-base">Revenue</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow
              key={row?._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <p className="text-medium-text text-base">
                  {row?.campaigns.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text text-base">
                  {row?.clicks.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text text-base">
                  USD {row?.cost.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className="text-medium-text text-base">
                  {row?.conversions.toLocaleString()}
                </p>
              </TableCell>
              <TableCell align="right">
                <p className=" text-medium-text text-base">
                  USD {row?.revenue.toLocaleString()}
                </p>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <p className="text-medium-text text-base">Total</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text text-base">
                {getTotal(tableData, "clicks").toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text text-base">
                USD {getTotal(tableData, "cost").toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text text-base">
                {getTotal(tableData, "conversions").toLocaleString()}
              </p>
            </TableCell>
            <TableCell align="right">
              <p className="text-medium-text text-base">
                USD {getTotal(tableData, "revenue").toLocaleString()}
              </p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
