import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function Navigation(props: any) {
  const { navData } = props;
  const dataset = navData.map(
    (data: { id: string; value: number }) => data?.value
  );

  const labelss = navData.map(
    (data: { id: string; value: number }) => data?.id
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const labels = labelss;

  const data = {
    labels,
    datasets: [
      {
        label: "Navigation",
        data: dataset,
        backgroundColor: "#189DFD",
        borderRadius: 10,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default Navigation;
