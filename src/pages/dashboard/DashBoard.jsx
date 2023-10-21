import React, { useState } from "react";
import { LayoutContainer } from "../../layout";
import {
  ProductTable,
  ComponentContainer,
  DoughnutChart,
  Toggle,
  UserTable,
} from "../../components/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const DashBoard = () => {
  const [toggle, setToggle] = useState(true);

  const icon = (
    <p className="text-light-text cursor-pointer opacity-60" title="Info">
      <HelpOutlineIcon />
    </p>
  );
  return (
    <LayoutContainer>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ComponentContainer title="Ad Insights" ele={icon} border>
          <ProductTable />
        </ComponentContainer>

        <ComponentContainer title="Ad Insights" ele={icon} border>
          <div className="relative flex flex-col h-full">
            {toggle ? (
              <div className="flex flex-col justify-center items-center">
                <DoughnutChart />
              </div>
            ) : (
              <UserTable />
            )}

            <div className="block mr-5 mb-5 ml-auto">
              <Toggle toggle={toggle} setToggle={setToggle} />
            </div>
          </div>
        </ComponentContainer>
      </div>
    </LayoutContainer>
  );
};

export default DashBoard;
