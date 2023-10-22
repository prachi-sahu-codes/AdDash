import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const SuccessModal = () => {
  return (
    <div className="fixed top-0 bottom-0 w-full h-full z-20  backdrop-blur-sm bg-white/70">
      <div className="flex flex-col justify-center items-center p-5 w-96 h-44 bg-white shadow-custom-md rounded centerModal">
        <CheckCircleIcon
          className="text-custom-blue"
          sx={{
            fontSize: "30px",
          }}
        />
        <p className="text-dark-text font-medium p-4">Submitted</p>
      </div>
    </div>
  );
};
