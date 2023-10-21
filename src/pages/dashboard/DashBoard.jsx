import React from "react";
import { LayoutContainer } from "../../layout";
import {
  BasicTable,
  ComponentContainer,
  DoughnutChart,
} from "../../components/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const DashBoard = () => {
  const icon = (
    <p className="text-light-text cursor-pointer opacity-60" title="Info">
      <HelpOutlineIcon />
    </p>
  );
  return (
    <LayoutContainer>
      <div className="grid grid-cols-2 gap-8">
        <ComponentContainer title="Ad Insights" ele={icon} border>
          <BasicTable />
        </ComponentContainer>

        <ComponentContainer title="Ad Insights" ele={icon} border>
          <div className="flex justify-center items-center h-full">
            <DoughnutChart />
          </div>
        </ComponentContainer>
      </div>
    </LayoutContainer>
  );
};

export default DashBoard;
