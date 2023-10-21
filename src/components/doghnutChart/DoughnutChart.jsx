import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Males", "Females", "Unknown"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 5],
      backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
      borderColor: ["#fff"],
      borderWidth: 7,
    },
  ],
};

export const DoughnutChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
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
