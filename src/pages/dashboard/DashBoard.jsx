import React from "react";
import { LayoutContainer } from "../../layout";
import EnhancedTable from "../../components/table/Table";

const DashBoard = () => {
  return (
    <LayoutContainer>
      <EnhancedTable />
      <div>graph</div>
    </LayoutContainer>
  );
};

export default DashBoard;
