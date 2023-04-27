import React, { useEffect } from "react";
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
import { Line } from "react-chartjs-2";
import { useAdminNav } from "@/store/adminNav";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  aspectRatio: 3,
  maintainAspectRatio: true,
  scales: {
    x: {
      display: false,
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      display: false,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "september",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 10, 50, 50, 10, 10, 0, 0, 50, 50, 80, 80],
      borderColor: "rgb(102, 108, 255)",
      backgroundColor: "rgba(102, 108, 255, 1)",
      borderWidth:3
    },
  ],
};

export function MatchPlayedChart() {
    const {menuIsOpen}=useAdminNav()
    useEffect(()=>{
    },[menuIsOpen])
  return (
    <div className="w-full flex  relative m-auto">
      <Line options={options} data={data} className="m-auto  xl:w-[70%] lg:w-[68%] w-[65%]   " />
        <Line options={options} data={data} className='m-auto absolute top-3 left-1 right-0   opacity-10  '/>
      
    </div>
  );
}
