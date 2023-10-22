import React, { useState } from "react";
import { LayoutContainer } from "../../layout";
import {
  ProductTable,
  ComponentContainer,
  DoughnutChart,
  Toggle,
  UserTable,
  DoughnutHeader,
} from "../../components/index";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const DashBoard = () => {
  const [toggle, setToggle] = useState(true);
  const [labelSelected, setLabelSelected] = useState("clicks");
  const productEle = (
    <p className="text-light-text cursor-pointer opacity-60" title="Info">
      <HelpOutlineIcon />
    </p>
  );

  return (
    <LayoutContainer>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <ComponentContainer title="Ad Insights" ele={productEle} border>
          <ProductTable />
        </ComponentContainer>

        <ComponentContainer
          title="Ad Insights"
          ele={
            toggle ? (
              <DoughnutHeader setLabelSelected={setLabelSelected} />
            ) : (
              productEle
            )
          }
          border
        >
          <div className="relative flex flex-col h-full">
            {toggle ? (
              <div className="flex flex-col justify-center items-center">
                <DoughnutChart labelSelected={labelSelected} />
              </div>
            ) : (
              <div className="pb-16 sm:pb-14 ">
                <UserTable />
              </div>
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
