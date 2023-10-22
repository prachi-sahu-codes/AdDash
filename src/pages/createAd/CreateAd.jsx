import React, { useState } from "react";
import { LayoutContainer } from "../../layout";
import { ComponentContainer } from "../../components";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router";
import mediaAd from "../../assets/mediaAd.png";
import textAd from "../../assets/textAd.png";

const CreateAd = () => {
  const [adSelected, setAdSelected] = useState([]);
  const navigate = useNavigate();

  const checkboxHandler = (value) => {
    const checkPresence = adSelected.includes(value);
    if (!checkPresence) {
      setAdSelected((prev) => [...prev, value]);
    } else {
      const removeValue = adSelected.filter((str) => str !== value);
      setAdSelected(removeValue);
    }
  };

  const buttonHandler = () => {
    if (adSelected.length > 0) {
      const ifMediaAd = adSelected.includes("mediaAd");
      if (ifMediaAd) {
        navigate("/mediaAd");
      } else {
        navigate("/textAd");
      }
    }
  };

  return (
    <LayoutContainer>
      <ComponentContainer title="Create Ads">
        <div className="w-full h-full flex items-center justify-center gap-14 ">
          <div
            className="w-72 border-4 border-solid border-white m-4 rounded-md shadow-custom-sm"
            onClick={() => checkboxHandler("textAd")}
          >
            <Checkbox
              checked={adSelected.includes("textAd")}
              className={`${adSelected.includes("textAd") ? "" : "opacity-20"}`}
            />
            <img src={textAd} className="w-48 m-auto -mt-1" />
            <div className="bg-bg-body text-center p-5">
              <p className="text-xs text-light-text">Create</p>
              <h2 className="text-xl font-semibold text-dark-text">Text Ad</h2>
            </div>
          </div>
          <div
            className="w-72 border-4 border-solid border-white m-4 rounded-md shadow-custom-sm"
            onClick={() => checkboxHandler("mediaAd")}
          >
            <Checkbox
              checked={adSelected.includes("mediaAd")}
              className={`${
                adSelected.includes("mediaAd") ? "" : "opacity-20"
              }`}
            />
            <img src={mediaAd} className="w-48 m-auto -mt-1" />
            <div className="bg-bg-body text-center p-5">
              <p className="text-xs text-light-text">Create</p>
              <h2 className="text-xl font-semibold text-dark-text">Media Ad</h2>
            </div>
          </div>
        </div>

        <div className="flex justify-end m-4">
          <button
            type="button"
            className={`${
              adSelected.length > 0
                ? "bg-custom-blue text-white"
                : "bg-gray-200 text-medium-text"
            } py-3 px-16 text-sm font-semibold rounded`}
            onClick={buttonHandler}
            disabled={adSelected.length < 0}
          >
            Next
          </button>
        </div>
      </ComponentContainer>
    </LayoutContainer>
  );
};

export default CreateAd;
