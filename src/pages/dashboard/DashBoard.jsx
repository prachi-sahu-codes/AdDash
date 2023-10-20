import React from "react";
import { LayoutContainer } from "../../layout";
import { BasicTable } from "../../components/table/Table";

const DashBoard = () => {
  return (
    <LayoutContainer>
      <BasicTable />
      <div>graph</div>
    </LayoutContainer>
  );
};

export default DashBoard;
