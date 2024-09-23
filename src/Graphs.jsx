import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Graphs = ({ data }) => {

  const labels = ["1-01-2001", "1-06-2001", "31-12-2001"];

  const datasets = Object.keys(data).map((celebrity) => ({
    label: celebrity,
    data: [
      parseInt(
        data[celebrity]["Agrégat"].replace(" milliards", "").replace(",", "")
      ), 
      parseInt(
        data[celebrity]["Agrégat"].replace(" milliards", "").replace(",", "")
      ) + 20, 
      parseInt(
        data[celebrity]["Agrégat"].replace(" milliards", "").replace(",", "")
      ) + 50,
    ],
    borderColor:
      celebrity === "Elon Musk"
        ? "rgba(255, 99, 132, 1)"
        : celebrity === "Bill Gates"
        ? "rgba(54, 162, 235, 1)"
        : "rgba(75, 192, 192, 1)",
    backgroundColor:
      celebrity === "Elon Musk"
        ? "rgba(255, 99, 132, 0.2)"
        : celebrity === "Bill Gates"
        ? "rgba(54, 162, 235, 0.2)"
        : "rgba(75, 192, 192, 0.2)",
    fill: true,
  }));

  const dataChart = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
      y: {
        title: {
          display: true,
          text: "Agrégat (en milliards)",
        },
      },
    },
  };

  return (
    <div>
      <Line data={dataChart} options={options} />
    </div>
  );
};

export default Graphs;
