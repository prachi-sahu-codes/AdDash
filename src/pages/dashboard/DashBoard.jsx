import React from "react";
import { LayoutContainer } from "../../layout";
import { BasicTable, DoughnutChart } from "../../components/index";

const DashBoard = () => {
  return (
    <LayoutContainer>
      <div className="flex flex-wrap gap-4">
        <div>
          <BasicTable />
        </div>
        <div className="flex justify-center items-center">
          <DoughnutChart />
        </div>
      </div>
    </LayoutContainer>
  );
};

export default DashBoard;
