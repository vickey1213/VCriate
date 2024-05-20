import React from "react";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import chartData from "./data/data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
        },
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.5,
          },
          pinch: {
            enabled: true,
            speed: 0.5,
          },
          mode: "xy",
        },
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  };

  // Define the data object using the imported chartData
  const data = {
    labels: chartData.labels, // Ensure your JSON file has a labels array
    datasets: chartData.datasets, // Ensure your JSON file has a datasets array
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Interactive Data Visualization Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Dashboard;
