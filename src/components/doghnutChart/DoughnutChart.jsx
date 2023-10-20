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
        display: false, // Hide the default legend
      },
    },
  };
  data.datasets[0].cutout = 80;
  return (
    <div className="flex justify-between items-center gap-3 relative w-72 h-72">
      <Doughnut data={data} options={options} />
      <div
        className="flex flex-col"
      >
        {data.labels.map((label, index) => (
          <div className="flex">
            <div
              key={index}
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
                borderRadius: "5px",
                width: "60px",
                height: "17px",
                marginRight: "10px",
              }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
