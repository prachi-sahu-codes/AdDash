import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { getTotal } from "../../utils/functions";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ labelSelected }) => {
  const graphData = useSelector((state) => state?.dashboard?.graphData);
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labelData = graphData.map((obj) => obj[labelSelected]);
  const labelTitle = " Number of " + labelSelected;

  const totalValue = getTotal(graphData, labelSelected);
  const percentageLabel = graphData.map(
    (obj) =>
      Math.round((obj[labelSelected] / totalValue) * 100) + "% of " + obj.group
  );

  const data = {
    labels: percentageLabel,
    datasets: [
      {
        label: labelTitle,
        data: labelData,
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        borderColor: ["#fff"],
        borderWidth: 7,
      },
    ],
  };

  // data.datasets[0].cutout = 84;

  return (
    <div className="flex justify-between items-center gap-12 h-full">
      <div className=" relative w-52 h-52 md:w-72 md:h-72 mt-6">
        <Doughnut data={data} options={options} />
      </div>
      <div className="flex flex-col">
        {data.labels.map((label, index) => (
          <div className="flex items-center m-3" key={index}>
            <div
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
                borderRadius: "5px",
                width: "55px",
                height: "16px",
                marginRight: "20px",
              }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
