import React from "react";

export const ComponentContainer = ({ title, ele, border, children }) => {
  return (
    <div className="flex flex-col border-solid border-2 border-gray-200 bg-white rounded-md">
      <div
        className={`flex justify-between items-center text-dark-text font-semibold text-lg p-4 ${
          border && "border-b-2"
        }`}
      >
        <p className="text-base 430px:text-lg">{title}</p>
        {ele}
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
};
